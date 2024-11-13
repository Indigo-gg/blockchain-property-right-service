<template>
  <div class="flex-row-space-around">
    <div id="centerRight4">
      <div class="bg-color-black">
        <div class="d-flex pt-2 pl-2">
          <div class="d-flex">
            <span class="fs-xl text mx-2">交易数据</span>
          </div>
        </div>
        <div class="d-flex jc-center body-box">
          <dv-scroll-board class="dv-scr-board" :config="config" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DvScrollBoard from '@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue'
export default {
  name:'transList',
  components:{
    DvScrollBoard
  },
  props:{
    list:{
      type:Array,
      require:true
    }
  },
  data () {
    return {
      config: {
        header: ['区块哈希','交易时间'],
        data: [],
        rowNum: 15, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: false,
        columnWidth: [300,100],
        align: ['center']
      }
    }
  },
  mounted () {
    this.list.forEach(i=>{
      let array=[i.transHash,i.createTime]
      this.config.data.push(array)
    })
  }
}
</script>

<style lang="scss" scoped>
$box-height: 90%;
$box-width: 100%;
#centerRight4 {
  padding: 8px;
  //padding-top: 4em;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;

  .bg-color-black {
    height: $box-height;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;

    .dv-scr-board {
      font-size: 9px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
