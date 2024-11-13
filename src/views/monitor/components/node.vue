<template>
  <div class="node">
    <div id="chart4" style="height: 200px;width: 100%">
    </div>
  </div>

</template>

<script>
let myChart={}
export default {
  name:'node',
  props:{
    node:{
      type:Array,
      require:true
    }
  },
  data () {
    return {
      arrData:[]
    }
  },
  methods:{
    setNode(){
      this.arrData = [{
        // name: this.node[0].nodeName,
        name:'节点一',
        value: [15, 50]
      },
        {
          name:'节点一',
          // name: this.node[1].nodeName,
          value: [-50, 10]
        },
        {
          name:'节点一',
          // name: this.node[2].nodeName,
          value: [-55, -70]
        },
        {
          name:'节点一',
          // name: this.node[3].nodeName,
          value: [40, -40]
        },
      ]
    }
  },
  mounted () {
///
// 节点可拖动
// 前后点击两个节点，可以对节点进行连接
// 点击连线，可以删除连线
// 动态添加、删除节点 ，还未完成


    let that=this
//关系坐标
    var xydata = [
      [0, 1],
      [1, 2],
      [2, 3]
    ];
//节点坐标
    let dataArr =[{
      name: this.node[0].blockNumber,
      // name:'节点一',
      value: [15, 50]
    },
      {
        // name:'节点一',
        name: this.node[1].blockNumber,
        value: [-50, 10]
      },
      {
        // name:'节点一',
        name: this.node[2].blockNumber,
        value: [-55, -70]
      },
      {
        // name:'节点一',
        name: this.node[3].blockNumber,
        value: [40, -40]
      },
    ]

//设置点的大小
    var symbolSize = 50;

//当0时候表示输入起点坐标，其他值输入终点坐标
    var position = 0;
//起点
    var positionSource;
//钟点
    var positionTarget;
//设置判断点击线还是点击点
    var ok = 1;
//删除数组的索引位置
    var del;

    var links = xydata.map(function(item, i) {
      return {
        source: xydata[i][0],
        target: xydata[i][1]
      };
    });

    var option = {
      title: {
        text: '区块节点',
        textStyle:{
          color:'#ffffff',
          fontSize:'9px',
          padding:'10px'
        }
      },
      grid: {

      },
      //定义X轴
      xAxis: {
        min: -100,
        max: 100,
        type: 'value',
        axisLine: {
          onZero: false
        },
        show: false
      },
      yAxis: {
        min: -100,
        max: 100,
        type: 'value',
        axisLine: {
          onZero: false
        },
        show: false
      },
      series: [{
        //设置id很重要
        id: 'a',
        //设置为甘特图
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        //设置球的大小
        symbolSize: symbolSize,

        label: {
          show: true,
          formatter: function(d, i) {
            return dataArr[d.dataIndex].name;
          }
        },
        itemStyle: {

          borderColor: '#22faf7',
          borderWidth: 3,
          color: '#123456',
        },
        //设置连线形式为箭头
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        //指定数据数组
        data: that.$echarts.util.map(dataArr, function(item, di) {
          return item.value;
        }),
        //指定连线方式
        edges: links,
        //指定连线颜色
        lineStyle: {
          normal: {
            color: '#22faf7'
          }
        },
      }],

    };

    myChart=this.$echarts.init(document.getElementById('chart4'))

//在demo里，必须要加setTimeout ，否则执行 myChart.convertToPixel 会报错
    setTimeout(function() {
      initGraphic();
      //窗口大小改事件
      window.addEventListener('resize', updatePosition);
    }, 0);

//重新定位图形元素
    function updatePosition() {
      myChart.setOption({
        graphic: that.$echarts.util.map(dataArr, function(item, dataIndex) {
          return {
            position: myChart.convertToPixel('grid', item.value),
          };
        })
      });
    }

//绘制图形元素
    function initGraphic() {
      myChart.setOption({
        graphic: that.$echarts.util.map(dataArr, function(item, dataIndex) {
          return {
            //圆形
            type: 'circle',
            //将坐标转化为像素
            position: myChart.convertToPixel('grid', item.value),
            shape: {
              // 拖动点的大小
              r: symbolSize / 2 - 2
            },
            style: {
              fill: '#3FA7DC50',
              borderColor: '#22faf7',
              borderWidth: 1,
            },

            //指定虚拟圈是否可见  false 可见
            invisible: false,
            //指定圈被拖拽（可以与不可以）
            draggable: true,
            //ondrag: echarts.util.curry(onPointDragging, dataIndex),
            onclick: that.$echarts.util.curry(initLinks, dataIndex),
            onmouseup: that.$echarts.util.curry(onPointDragging, dataIndex),
            //层级
            z: 100

          };
        })
      });
    }
//图形元素拖动后， 修改节点位置
    function onPointDragging(dataIndex, dx, dy) {
      dataArr[dataIndex].value = myChart.convertFromPixel('grid', this.position);
      // Update data
      myChart.setOption({
        series: [{
          id: 'a',
          data: dataArr
        }]
      });

    }

//绘制添加的连线
    function initLinks(dataIndex){
      for (var i = 0; i < dataArr.length; i++) {
        if (i == dataIndex) {
          ok = 0;
          if (position == 0) {
            positionSource = i;
            position = 1;
          } else {
            positionTarget = i;
            position = 0;
            xydata.push([positionSource, positionTarget])
            //当xydata值改变时linkss方法需要重新跑一变
            var linkss = xydata.map(function (item, i) {
              return {
                source: xydata[i][0],
                target: xydata[i][1]
              };
            });
            //重新载入的东西都写在这里
            myChart.setOption({
              series: [{
                edges: linkss,
                //指定连线颜色
                lineStyle: {
                  normal: {
                    color: '#22faf7'
                  }
                }
              }]
            });
            return true;
          }
          break;
        }

      }
    }

//点击事件 , 删除连线
    myChart.on('click', function (params) {
      if (params.componentType != 'series' || params.dataType != "edge") {
        return;
      }

      var a = [params.data.source, params.data.target]
      for (var i = 0; i < xydata.length; i++) {
        if (params.data.source == xydata[i][0] && params.data.target == xydata[i][1]) {
          del = i;
          xydata.splice(del, 1);
          //当xydata值改变时linkss方法需要重新跑一变
          var linkss = xydata.map(function (item, i) {
            return {
              source: xydata[i][0],
              target: xydata[i][1]
            };
          });
          //重新载入的东西都写在这里
          myChart.setOption({
            series: [{
              edges: linkss,
            }]
          });
          return true;
        }
      }

    });
    this.$nextTick(()=>{
      myChart.setOption(option)
    })

  }
}
</script>

<style scoped>
.node{
  height: 100%;
  width: 100%;
}
</style>
