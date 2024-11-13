<template>
  <div id="centerRight6">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2">区块列表</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import DvScrollBoard from '@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue'

export default {
  name:'node',
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
        header: ['块高','区块哈希'],
        data: [],
        rowNum: 14, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: false,
        columnWidth: [100,300],
        align: ['center']
      }
    }
  },
  mounted () {
    this.list.forEach(i=>{
      let array=[i.blockNumber,i.pkHash]
      this.config.data.push(array)
    })

  }
}
</script>

<style lang="scss" scoped>
$box-height: 90%;
$box-width: 100%;
#centerRight6 {
  padding: 8px;
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








<!--<template>-->
<!--<div class="block">-->
<!--<div class="top flex-row-space-between">-->
<!--  <span>区块哈希</span>-->
<!--  <span>交易时间</span>-->
<!--</div>-->
<!--  <div class="body">-->
<!--    <div class="item flex-row-space-between" v-for="item in list">-->
<!--      <a-col :span="18">-->
<!--        <div class="hash text-overflow-1">{{item.pkHash}}</div>-->

<!--      </a-col>-->
<!--      <a-col :span="6">-->
<!--        <div class="time">{{item.createTime}}</div>-->

<!--      </a-col>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'block',-->
<!--  props:{-->
<!--    list:{-->
<!--      type:Array,-->
<!--      require:true-->
<!--    }-->

<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->