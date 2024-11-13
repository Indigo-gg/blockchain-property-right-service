<template>
  <div class="main flex-row-space-around">
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from '@/views/monitor/components/bottom/bottom'

export default {
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      drawTiming: null,
      cdata: {
        year: null,
        weekCategory: [],
        maxData: 200,
        weekMaxData: [],
        weekLineData: []
      }
    }
  },
  components: {
    Chart
  },
  mounted () {
    this.drawTimingFn()
  },
  beforeDestroy () {
    clearInterval(this.drawTiming)
  },
  methods: {
    drawTimingFn () {
      this.setData()
      this.drawTiming = setInterval(() => {
        this.setData()
      }, 6000)
    },
    setData () {
      // 清空轮询数据
      this.cdata.weekCategory = []
      this.cdata.weekMaxData = []
      this.cdata.weekLineData = []
      let dateBase = new Date()
      this.cdata.year = dateBase.getFullYear()
      // 周数据
      // console.log('list-day',this.list)
      for (let i = 0; i < this.list.length; i++) {
        // 日期
        this.cdata.weekCategory.push(this.list[i].day.slice(5,10))
        // this.cdata.weekCategory.unshift([date.getMonth() + 1, date.getDate() - i].join('/'))
        // 折线图数据
        this.cdata.weekMaxData.push(this.cdata.maxData)
        let distance = this.list[i].transCount
        this.cdata.weekLineData.push(distance)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>


<!--<template>-->
<!--  <div class="main">-->
<!--    <div class="title">交易趋势</div>-->
<!--    <div class="day"  ref="day">-->
<!--  </div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--let chart2={}-->
<!--import {weGetTransDayList} from '@/api/pageApi'-->
<!--import { Chart } from '@antv/g2'-->
<!--export default {-->
<!--  name: 'transDay',-->
<!--  props:{-->
<!--    day:{-->
<!--      type:Array,-->
<!--      require:true-->
<!--    },-->
<!--    isFull:{-->
<!--      type:Boolean-->
<!--    }-->

<!--  },-->
<!--  methods:{-->
<!--    init(data){-->
<!--      chart2=new Chart({-->
<!--        container: this.$refs.day,-->
<!--        theme: 'classic',-->
<!--        autoFit:true-->
<!--      });-->
<!--      console.log('day',data)-->
<!--      chart2.line()-->
<!--        .data(data)-->
<!--        .encode('x','day')-->
<!--        .encode('y','transCount')-->
<!--        .animate('update', {duration:300})-->
<!--      chart2.render()-->
<!--    }-->
<!--  },-->
<!--  watch:{-->
<!--    isFull(newVal){-->
<!--      if(newVal){-->
<!--        chart2.theme({ type: 'classicDark' })-->
<!--        chart2.render()-->
<!--      }-->
<!--      else {-->
<!--        chart2.theme({ type: 'classic' })-->
<!--        chart2.render()-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    weGetTransDayList().then(res=>{-->
<!--      this.init(res.data[0])-->
<!--    })-->
<!--  }-->

<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.day{-->
<!--  width: 300px;-->
<!--  height: 200px;-->
<!--}-->
<!--</style>-->