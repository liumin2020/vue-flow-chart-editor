<template>
  <div class="flow-chart-editor__wrapper">
    <div :style="{ width: flowChartData.width, height: flowChartData.height }" class="flow-chart-editor">
      <div :style="{ 'flex-basis': `${rowHeight}px` }" class="flow__row-item">
        <flow-item :itemData="flowChartData.start" :isRowStart="true" :columnWidth="columnWidth" :rowHeight="rowHeight"></flow-item>
      </div>
      <div :style="{ 'flex-basis': `${rowHeight * (treeDeep - 1)}px` }" class="flow__row-item">
        <flow-item
          v-for="(item, index) in flowChartData.children"
          :key="`row-${index}`"
          :itemData="item"
          :columnWidth="columnWidth"
          :rowHeight="rowHeight"
          :isColumnStart="index === 0"
          :isColumnEnd="index === flowChartData.children.length - 1"></flow-item>
      </div>
      <div :style="{ 'flex-basis': `${rowHeight}px`, position: 'relative' }" class="flow__row-item">
        <div :style="{ left: `${columnWidth / 2}px`, right: `${columnWidth / 2}px` }" class="flow-row-bottom-line"></div>
        <flow-item :itemData="flowChartData.end" :isRowEnd="true" :columnWidth="columnWidth" :rowHeight="rowHeight"></flow-item>
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
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    treeExtent () {
      return getTreeExtent([this.flowChartData])
    },
    columnWidth () {
      return parseInt(this.flowChartData.width) / this.treeExtent
    },
    treeDeep () {
      return getTreeDeep([this.flowChartData])
    },
    rowHeight () {
      return parseInt(this.flowChartData.height) / (this.treeDeep + 1)
    }
  },
  created () {
  },
  methods: {}
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
