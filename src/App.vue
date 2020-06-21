<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <h1>vue-flow-chart-editor</h1>
      <div class="description">vue-flow-chart-editor 适用架构图、流程图的渲染及编辑。</div>
      <flow-chart-editor :flowChartData="flowChartData"></flow-chart-editor>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import FlowChartEditor from '@/components/FlowChartEditor/index'

export default {
  name: 'app',
  components: {
    FlowChartEditor
  },
  data () {
    return {
      locale: zhCN,
      flowChartData: {
        width: '1500px',
        height: '800px',
        start: {
          // shape: ellipse => 椭圆，circle => 圆形，rect => 正方形，diamond => 菱形
          shape: 'ellipse',
          // 唯一标识
          label: '0-0',
          // 内容
          value: '开始',
          // lineText：链接到当前元素的线上字
          lineText: ''
        },
        end: {
          shape: 'ellipse',
          label: '2-1',
          value: '结束'
        },
        children: [
          {
            shape: 'rect',
            label: '1-0',
            value: '正方形'
          },
          {
            shape: 'circle',
            label: '1-1',
            value: '圆形'
          },
          {
            shape: 'diamond',
            label: '1-2',
            value: '我的操作，确认？',
            children: [
              {
                shape: 'diamond',
                label: '1-2-0',
                value: '是的选择？',
                lineText: 'yes',
                children: [
                  {
                    shape: 'rect',
                    label: '1-2-0-0',
                    value: '是1',
                    lineText: '1',
                    children: [
                      {
                        shape: 'rect',
                        label: '1-2-0-0-1',
                        value: '是1-1',
                        lineText: '1-1'
                      }
                    ]
                  },
                  {
                    shape: 'rect',
                    label: '1-2-0-1',
                    value: '是2',
                    lineText: '2'
                  }
                ]
              },
              {
                shape: 'rect',
                label: '1-2-1',
                value: '选择二',
                lineText: 'no'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .description {
    margin-bottom: 15px;
  }
}
</style>
