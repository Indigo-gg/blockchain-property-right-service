<template>
<div>
  <div ref="chart">
  </div>
</div>
</template>

<script>
let chart={}
import { Chart } from '@antv/g2'
export default {
  name: 'G2Chart',
  data(){
    return{
      // chart:{},
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]
    }
  },
  methods:{
    renderChart(dom){
        chart = new Chart({
          container:dom,
          theme:'classic'
        })
      chart
        .interval()
        .data(this.data)
        .encode('x','genre')
        .encode('y','sold')
        .encode('key','genre')
        .animate('update', {duration:300})
      chart.render()
    }
  },
  mounted () {
    this.renderChart(this.$refs.chart)
  }
}
</script>

<style scoped>

</style>