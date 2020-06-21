<template>
  <div class="flow-ellipse">
    <div v-if="!editorFlag" :title="flowData.value" class="flow-title" @click.stop="titleClick">
      {{ flowData.value }}
    </div>
    <a-input v-else ref="editorValue" placeholder="标题名" :value="flowData.value" @pressEnter="pressEnter" @blur="editorFlag = !editorFlag" />
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
    }
  },
  data () {
    return {
      nowValue: '',
      editorFlag: false
    }
  },
  methods: {
    titleClick () {
      this.editorFlag = !this.editorFlag
      this.$nextTick(() => {
        this.$refs.editorValue.focus()
      })
    },
    pressEnter (e) {
      this.$emit('editorValueChange', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import './../flowChartCommon.less';
.flow-ellipse {
  box-sizing: border-box;
  padding: (@ellipse-height - @ellipse-line-height - 4px) / 2 0;
  .position-center(@ellipse-width, @ellipse-height);
  border: 1px solid @color-bogder;
  border-radius: @ellipse-height / 2;
  background-color: #fff;
  .flow-title {
    .ellipsis();
    font-size: @font-large;
    text-align: center;
    line-height: @ellipse-line-height;
  }
}
</style>
