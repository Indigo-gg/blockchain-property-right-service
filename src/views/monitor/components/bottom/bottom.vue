<template>
  <div class="flex-row-space-around" style="height: 90%;width: 90%">
    <Echart
      class-name="ml-20"
      :options="options"
      id="centreLeft1Chart"
      height="100%"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/views/monitor/echarts/index'
export default {
  name:'bottom',
  data() {
    return {
      options: {},
      // 定义颜色
      colorList: {
        linearYtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#f5b44d'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        linearGtoB: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#43dfa2'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        linearBtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#1c98e8'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        areaBtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(35,184,210,.2)'
            },
            {
              offset: 1,
              color: 'rgba(35,184,210,0)'
            }
          ]
        }
      }
    }
  },
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          title: {
            text: '',
            textStyle: {
              color: '#6b5cfa',
              fontSize: 9,
              fontWeight: 'normal'
            },
            // subtext: newData.year + '/' + newData.weekCategory[6],
            // subtextStyle: {
            //   color: '#fff',
            //   fontSize: 12
            // },
            top: 50,
            left: 80
          },
          // legend: {
          //   top: 120,
          //   left: 80,
          //   orient: 'vertical',
          //   itemGap: 15,
          //   itemWidth: 12,
          //   itemHeight: 12,
          //   data: ['平均交易量'],
          //   textStyle: {
          //     color: '#fff',
          //     fontSize: 9
          //   }
          // },
          tooltip: {
            trigger: 'item'
          },
          xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: true,
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 12
            },
            data: newData.weekCategory
          },
          // 下方Y轴
          yAxis: {
            name: '交易数量',
            nameLocation: 'end',
            nameGap: 24,
            nameTextStyle: {
              color: 'rgba(255,255,255,.5)',
              fontSize: 12
            },
            max: newData.maxData,
            splitNumber: 4,

            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: 0.1
              }
            },
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 9
            }
          },
          series: [
            {
              name: '',
              type: 'line',
              smooth: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#fff'
                }
              },
              lineStyle: {
                normal: {
                  color: this.colorList.linearBtoG,
                  width: 3
                }
              },
              areaStyle: {
                normal: {
                  color: this.colorList.areaBtoG
                }
              },
              data: newData.weekLineData,
              lineSmooth: true,
              tooltip: {
                position: 'top',
                formatter: '{c} 次',
                backgroundColor: 'rgba(28,152,232,.2)',
                padding: 6
              }
            },
            {
              name: '占位背景',
              type: 'bar',
              itemStyle: {
                normal: {
                  show: true,
                  color: '#000',
                  opacity: 0
                }
              },
              silent: true,
              barWidth: '50%',
              data: newData.weekMaxData,
              animation: false
            }
          ]
        }
      },
      immediate: false,
      deep: true
    }
  }
}
</script>

