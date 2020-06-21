<template>
  <div :style="{ 'flex-basis': `${columnWidth * treeExtent}px` }" class="flow-item">
    <div :style="{ 'flex-basis': `${rowHeight}px` }" class="flow-item__content">
      <div class="flow-column-line" :class="{ 'is-column-start': isRowStart, 'is-column-end': isRowEnd }"></div>
      <div v-if="!isRowStart && !isRowEnd" class="flow-row-top-line" :class="{ 'is-row-start': isColumnStart, 'is-row-end': isColumnEnd }"></div>
      <flow-handle :flowData="itemData" :isRowStart="isRowStart" @editorValueChange="editorValueChange"></flow-handle>
    </div>
    <template v-if="itemData.children && itemData.children.length">
      <div class="flow__column-item">
        <div :style="{ 'flex-basis': getPercentage(treeDeep + 1, 1) }" class="flow__row-item">
          <flow-item
            v-for="(item, index) in itemData.children"
            :key="`row-item-${index}`"
            :itemData="item"
            :columnWidth="columnWidth"
            :rowHeight="rowHeight"
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
import { getTreeExtent, getTreeDeep } from './flowChartCommon'

export default {
  name: 'FlowItem',
  components: {
    FlowHandle
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
    }
  },
  created () {
  },
  methods: {
    getPercentage (num, val) {
      return `${(100 / num) * val}%`
    },
    editorValueChange (val) {
      this.$emit('editorValueChange', val)
    }
  }
}
</script>

<style lang="less" scoped>
@import './flowChartCommon.less';
.flow-item {
  .flow__row-item();
  .position(relative);
  flex-direction: column;
  .flow-item__content {
    flex: auto;
    .position(relative);
  }
}
</style>
