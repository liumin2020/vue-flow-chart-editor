<template>
  <div class="flow-chart-editor__wrapper">
    <div ref="flowChartEditor" :style="{ width: flowChartConfig.width, height: flowChartConfig.height }" class="flow-chart-editor">
      <div :style="{ 'flex-basis': `${rowHeight}px` }" class="flow__row-item">
        <flow-item :itemData="flowChartDataCopy.start" :isRowStart="true" :columnWidth="columnWidth" :rowHeight="rowHeight" @editorValueChange="editorValueChange"></flow-item>
      </div>
      <div :style="{ 'flex-basis': `${rowHeight * (treeDeep - 1)}px` }" class="flow__row-item">
        <flow-item
          v-for="(item, index) in flowChartDataCopy.children"
          :key="`row-${index}`"
          :itemData="item"
          :columnWidth="columnWidth"
          :rowHeight="rowHeight"
          :isColumnStart="index === 0"
          :isColumnEnd="index === flowChartDataCopy.children.length - 1"
          @editorValueChange="editorValueChange"></flow-item>
      </div>
      <div :style="{ 'flex-basis': `${rowHeight}px`, position: 'relative' }" class="flow__row-item">
        <div :style="{ left: `${columnWidth / 2}px`, right: `${columnWidth / 2}px` }" class="flow-row-bottom-line"></div>
        <flow-item :itemData="flowChartDataCopy.end" :isRowEnd="true" :columnWidth="columnWidth" :rowHeight="rowHeight" @editorValueChange="editorValueChange"></flow-item>
      </div>
    </div>
  </div>
</template>

<script>
import FlowItem from './FlowItem'
import { getTreeExtent, getTreeDeep } from './flowChartCommon'

export default {
  name: 'FlowChartEditor',
  components: {
    FlowItem
  },
  props: {
    // 数据源
    flowChartData: {
      type: Object,
      default () {
        return {}
      }
    },
    flowChartConfig: {
      type: Object,
      default () {
        return {
          width: '100%'
        }
      }
    }
  },
  data () {
    return {
      flowChartWidth: 0,
      flowChartDataCopy: {}
    }
  },
  computed: {
    treeExtent () {
      return getTreeExtent([this.flowChartDataCopy])
    },
    columnWidth () {
      return parseInt(this.flowChartWidth) / this.treeExtent
    },
    treeDeep () {
      return getTreeDeep([this.flowChartDataCopy])
    },
    rowHeight () {
      return parseInt(this.flowChartConfig.height) / (this.treeDeep + 1)
    }
  },
  created () {
    this.flowChartDataCopy = JSON.parse(JSON.stringify(this.flowChartData))
  },
  mounted () {
    if (!this.flowChartConfig.width || this.flowChartConfig.width === '100%') {
      this.flowChartWidth = this.$refs.flowChartEditor.parentNode.offsetWidth
    } else {
      this.flowChartWidth = this.flowChartConfig.width
    }
  },
  methods: {
    editorValueChange (val) {
      console.log(val)
      this.$emit('editorValueChange', val)
      // TODO: 内部遍历修改 flowChartDataCopy 对应的值
    }
  }
}
</script>

<style lang="less" scoped>
@import './flowChartCommon.less';
.flow-chart-editor__wrapper {
  .flow-chart-editor {
    .flow__column-item();
    .position(relative);
  }
}
</style>
