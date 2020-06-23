<template>
  <div class="flow-fork-line">
    <div class="top-center__center-center--line"></div>
    <div class="center-center__left-right--line"></div>
    <div class="center-bottom__center-center--line"></div>
  </div>
</template>

<script>
export default {
  name: 'FlowForkLine',
  props: {
    forkNums: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
@import './flowChartCommon.less';
.creat-line(@top, @bottom, @left, @right) {
  top: @top;
  bottom: @bottom;
  left: @left;
  right: @right;
}
.flow-fork-line {
  .position(relative);
  .center-center__left-right--line {
    .position(absolute, 10);
    .creat-line(50%, auto, 0, 0);
    height: 2px;
    margin-top: -1px;
    background-color: @color-bg;
  }
  .top-center__center-center--line {
    .position(absolute, 10);
    .creat-line(0, 50%, 50%, auto);
    width: 2px;
    margin-left: -1px;
    background-color: @color-bg;
  }
  .center-bottom__center-center--line {
    .position(absolute, 10);
    .creat-line(50%, 0, 50%, auto);
    width: 2px;
    margin-left: -1px;
    background-color: @color-bg;
  }
}
</style>
