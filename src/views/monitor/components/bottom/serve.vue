<template>
  <div class="flex-row-space-around" style="height: 90%;width: 100%">
    <Echart
      :options="options"
      id="centreLeft3Chart"
      height="380px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/views/monitor/echarts/index'
export default {
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
  mounted () {
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          title: {
            text: '',
            textStyle: {
              color: '#D3D6DD',
              fontSize: 24,
              fontWeight: 'normal'
            },
            top: 50,
            left: 80
          },
          legend: {
            top: 10,
            left: 20,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 18,
            itemHeight: 18,
            data: ['平均状态', '本机状态'],
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          tooltip: {
            trigger: 'item'
          },
          radar: {
            center: ['50%', '47%'],
            radius: '40%',
            name: {
              color: '#fff'
            },
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: this.colorList.linearYtoG,
                opacity: 0.6
              }
            },
            splitLine: {
              lineStyle: {
                color: this.colorList.linearYtoG,
                opacity: 0.6
              }
            },
            splitArea: {
              areaStyle: {
                color: '#fff',
                opacity: 0.1,
                shadowBlur: 25,
                shadowColor: '#000',
                shadowOffsetX: 0,
                shadowOffsetY: 5
              }
            },
            indicator: [
              {
                name: 'cup占用率',
                max: 100
              },
              {
                name: '内存占用率',
                max: 100
              },
              {
                name: '硬盘占用率',
                max: 100
              },
              {
                name: '网卡',
                max: 10
              }
            ]
          },
          series: [
            {
              name: '',
              type: 'radar',
              symbolSize: 0,
              data: [
                {
                  value: newData.radarDataAvg[0],
                  name: '平均状态',
                  itemStyle: {
                    normal: {
                      color: '#f8d351'
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: '#f8d351',
                      shadowBlur: 25,
                      shadowColor: 'rgba(248,211,81,.3)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      opacity: 1
                    }
                  }
                },
                {
                  value: newData.radarData[0],
                  name: '本机状态',
                  itemStyle: {
                    normal: {
                      color: '#43dfa2'
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: this.colorList.linearGtoB,
                      shadowBlur: 15,
                      shadowColor: 'rgba(0,0,0,.2)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 5,
                      opacity: 0.8
                    }
                  }
                }
              ]
            },
            // {
            //   name: '',
            //   type: 'line',
            //   smooth: true,
            //   symbol: 'emptyCircle',
            //   symbolSize: 8,
            //   itemStyle: {
            //     normal: {
            //       color: '#fff'
            //     }
            //   },
            //   lineStyle: {
            //     normal: {
            //       color: this.colorList.linearBtoG,
            //       width: 3
            //     }
            //   },
            //   areaStyle: {
            //     normal: {
            //       color: this.colorList.areaBtoG
            //     }
            //   },
            //   data: newData.weekLineData,
            //   lineSmooth: true,
            //   markLine: {
            //     silent: true,
            //     data: [
            //       {
            //         type: 'average',
            //         name: '平均值'
            //       }
            //     ],
            //     precision: 0,
            //     label: {
            //       normal: {
            //         formatter: '平均值: \n {c}'
            //       }
            //     },
            //     lineStyle: {
            //       normal: {
            //         color: 'rgba(248,211,81,.7)'
            //       }
            //     }
            //   },
            //   tooltip: {
            //     position: 'top',
            //     formatter: '{c} m',
            //     backgroundColor: 'rgba(28,152,232,.2)',
            //     padding: 6
            //   }
            // },
            // {
            //   name: '占位背景',
            //   type: 'bar',
            //   itemStyle: {
            //     normal: {
            //       show: true,
            //       color: '#000',
            //       opacity: 0
            //     }
            //   },
            //   silent: true,
            //   // barWidth: '50%',
            //   // data: newData.weekMaxData,
            //   animation: false
            // }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
