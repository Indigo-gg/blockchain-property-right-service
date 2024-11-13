<template>
  <div>
    <serve :cdata="cdata" />
  </div>
</template>

<script>
import serve from '@/views/monitor/components/bottom/serve.vue'
export default {
  name:'frontFind',
  data () {
    return {
      drawTiming: null,
      cdata: {
        year: null,
        weekCategory: [],
        radarData: [],
        radarDataAvg: [],
        maxData: 12000,
        weekMaxData: [],
        weekLineData: []
      }
    }
  },
  components: {
    serve,
  },
  mounted () {
    this.drawTimingFn();
  },
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },
  methods: {
    drawTimingFn () {
      this.setData();
      this.drawTiming = setInterval(() => {
        this.setData();
        // console.log('cdata',this.cdata)
      }, 6000);
    },
    setData () {
      // 清空轮询数据
      this.cdata.weekCategory = [];
      this.cdata.weekMaxData = [];
      this.cdata.weekLineData = [];
      this.cdata.radarData = [];
      this.cdata.radarDataAvg = [];
      let dateBase = new Date();
      this.cdata.year = dateBase.getFullYear();
      // 周数据
        // 日期
        // 雷达图数据
        // 我的指标
      let distance = (Math.random() * 0.1 + 40).toFixed(3);
      let averageSpeed = (Math.random() * 0.1 + 30).toFixed(3);
        let maxSpeed = Math.round(Math.random() * 0.1 + 10).toFixed(2);
        let hour = (maxSpeed/averageSpeed+3).toFixed(1);
        let radarDayData = [distance, averageSpeed, maxSpeed, hour];
        this.cdata.radarData.push(radarDayData);
        // 平均指标
        let distanceAvg = (Math.random() * 0.1 + 40).toFixed(3);
        let averageSpeedAvg = (Math.random() * 0.1 + 30).toFixed(3);
        let maxSpeedAvg =Math.round(Math.random() * 0.1 + 10).toFixed(2);
        let hourAvg =(maxSpeed/averageSpeed+3).toFixed(1);
        let radarDayDataAvg = [
          distanceAvg,
          averageSpeedAvg,
          maxSpeedAvg,
          hourAvg
        ];
        this.cdata.radarDataAvg.push(radarDayDataAvg);
      }
  }
};
</script>

<style lang="scss" scoped>
</style>