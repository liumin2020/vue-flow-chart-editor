<template>
  <div :style="{ 'flex-basis': `${columnWidth * treeExtent}px`, 'max-height': itemData.branchEnd ? `${rowHeight + brachIngHeight}px` : '' }" class="flow-item">
    <div :style="{ 'flex-basis': `${rowHeight}px` }" class="flow-item__content">
      <div class="flow-column-line" :class="{ 'is-column-start': isRowStart, 'is-column-end': isRowEnd }"></div>
      <!-- <div v-if="!isRowStart && !isRowEnd" class="flow-row-top-line" :class="{ 'is-row-start': isColumnStart, 'is-row-end': isColumnEnd }"></div> -->
      <flow-handle :flowData="itemData" :isRowStart="isRowStart" @editorValueChange="editorValueChange"></flow-handle>
    </div>
    <flow-fork-line :style="{ height: `${brachIngHeight}px` }" :forkFlex="itemData.children ? itemData.children.length : 1"></flow-fork-line>
    <template v-if="itemData.children && itemData.children.length">
      <div class="flow__column-item">
        <div :style="{ 'flex-basis': `${rowHeight + brachIngHeight}px` }" class="flow__row-item">
          <flow-item
            v-for="(item, index) in itemData.children"
            :key="`row-item-${index}`"
            :itemData="item"
            :columnWidth="columnWidth"
            :rowHeight="rowHeight"
            :brachIngHeight="brachIngHeight"
            :isColumnStart="index === 0"
            :isColumnEnd="index === itemData.children.length - 1"
            @editorValueChange="editorValueChange"></flow-item>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import FlowHandle from './FlowHandle'
import FlowForkLine from './FlowForkLine'
import { getTreeExtent, getTreeDeep } from './flowChartCommon'

export default {
  name: 'FlowItem',
  components: {
    FlowHandle,
    FlowForkLine
  },
  props: {
    itemData: {
      type: Object,
      default () {
        return {}
      }
    },
    isRowStart: {
      type: Boolean,
      default: false
    },
    isRowEnd: {
      type: Boolean,
      default: false
    },
    isColumnStart: {
      type: Boolean,
      default: false
    },
    isColumnEnd: {
      type: Boolean,
      default: false
    },
    columnWidth: {
      type: Number,
      default: 0
    },
    rowHeight: {
      type: Number,
      default: 0
    },
    brachIngHeight: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  computed: {
    treeExtent () {
      return getTreeExtent([this.itemData])
    },
    treeDeep () {
      return getTreeDeep([this.itemData])
    },
    forkFlex () {
      const res = this.itemData.children.map((item) => {
        return getTreeExtent(item.children)
      })
      return res
    }
  },
  created () {
  },
  methods: {
    editorValueChange (val) {
      this.$emit('editorValueChange', val)
    }
  }
}
</script>

<style lang="less" scoped>
@import './flowChartCommon.less';
.flow-item {
  box-sizing: border-box;
  .flow__row-item();
  .position(relative);
  flex-direction: column;
  .flow-item__content {
    flex: auto;
    .position(relative);
  }
}
</style>
