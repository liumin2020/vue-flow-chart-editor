<template>
  <div class="flow-handle">
    <a-icon v-if="!isRowStart" type="down" class="arrow-down" />
    <a-popover placement="right" trigger="click">
      <flow-ellipse :flowData="flowData" @editorValueChange="editorValueChange"></flow-ellipse>
      <template slot="title">
        <span>操作</span>
      </template>
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
    </a-popover>
  </div>
</template>

<script>
import FlowEllipse from './shape/FlowEllipse'
export default {
  name: 'FlowHandle',
  components: {
    FlowEllipse
  },
  props: {
    flowData: {
      type: Object,
      default () {
        return {}
      }
    },
    isRowStart: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    editorValueChange (val) {
      this.$emit('editorValueChange', {
        ...this.flowData,
        value: val
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import './flowChartCommon.less';
.flow-handle {
  .position-center(@handle-width, @handle-height);
  .arrow-down {
    font-size: @font-small;
    .position(absolute);
    top: 0;
    left: 50%;
    margin-left: -@font-small / 2;
  }
}
</style>
