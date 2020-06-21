<template>
  <div class="flow-ellipse">
    <a-icon v-if="!isRowStart" type="down" class="arrow-down" />
    {{ flowData.value }}
  </div>
</template>

<script>
export default {
  name: 'FlowEllipse',
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
  }
}
</script>

<style lang="less" scoped>
@import './../flowChartCommon.less';
.flow-ellipse {
  .position-center(120px, 60px);
  border: 1px solid @color-bogder;
  border-radius: 30px;
  background-color: #fff;
  .arrow-down {
    .position(absolute);
    top: 0;
    left: 50%;
    margin-top: -20px;
    margin-left: -7px;
  }
}
</style>
