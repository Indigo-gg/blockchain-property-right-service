<template>
  <div id="center">
    <div class="up"         :style="{backgroundColor:color}"
    >
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-15 colorBlue fw-b fs-xl">{{ item.title }}</p>
        <div class="number">
          <dv-digital-flop
            class="dv-dig-flop ml-15  mt-2 pl-3"
            :config="item.number"
          />
        </div>
      </div>
    </div>
  </div>
<!--  <div class="bars">-->
<!--    <a-row>-->
<!--      <a-col :span="12">-->
<!--        <div class="bar">-->
<!--          <div class="name">块高</div>-->
<!--          <div class="value">{{data.latestBlock}}</div>-->
<!--        </div>-->
<!--      </a-col>-->
<!--      <a-col  :span="12">-->
<!--        <div class="bar">-->
<!--          <div class="name">节点数</div>-->
<!--          <div class="value">{{data.nodeCount}}</div>-->
<!--        </div>-->
<!--      </a-col>-->
<!--    </a-row>-->
<!--    <a-row>-->
<!--      <a-col :span="12">-->
<!--        <div class="bar">-->
<!--          <div class="name">总交易量</div>-->
<!--          <div class="value">{{data.transactionCount}}</div>-->
<!--        </div>-->
<!--      </a-col>-->
<!--      <a-col :span="12">-->
<!--        <div class="bar">-->
<!--          <div class="name">今日交易量</div>-->
<!--          <div class="value">{{data.orgCount}}</div>-->
<!--        </div>-->
<!--      </a-col>-->
<!--    </a-row>-->
<!--    <a-row>-->
<!--      <a-col :span="12">-->
<!--        <div class="bar">-->
<!--          <div class="name">账户</div>-->
<!--          <div class="value">{{data.groupId}}</div>-->
<!--        </div>-->
<!--      </a-col>-->
<!--      <a-col :span="12">-->
<!--        <div class="bar">-->
<!--          <div class="name">合约数量</div>-->
<!--          <div class="value">{{data.contractCount}}</div>-->
<!--        </div>-->
<!--      </a-col>-->
<!--    </a-row>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'general',
  props:{
    myData:{
      type:Object,
      require:true
    },
    color:{
      type:String,
      require:true,
      default:'#0f1f40'
    }

  },
  data(){
    return{
      titleItem: []
    }
  },
  mounted () {
    this.titleItem=[
      {
        title: '块高',
        number: {
          number: [this.myData.latestBlock],
          // toFixed: 1,
          textAlign: 'left',
          content: '{nt}',
          style: {
            fontSize: 26
          }
        }
      },
      {
        title: '节点数',
        number: {
          number: [this.myData.nodeCount],
          // toFixed: 1,
          textAlign: 'left',
          content: '{nt}',
          style: {
            fontSize: 26
          }
        }
      },
      {
        title: '总交易量',
        number: {
          number: [this.myData.transactionCount],
          // toFixed: 1,
          textAlign: 'left',
          content: '{nt}',
          style: {
            fontSize: 26
          }
        }
      },
      {
        title: '今日交易量',
        number: {
          number: [this.myData.orgCount],
          // toFixed: 1,
          textAlign: 'left',
          content: '{nt}',
          style: {
            fontSize: 26
          }
        }
      },
      {
        title: '群组ID',
        number: {
          number: [this.myData.groupId],
          // toFixed: 1,
          textAlign: 'left',
          content: '{nt}',
          style: {
            fontSize: 26
          }
        }
      },
      {
        title: '合约数量',
        number: {
          number: [this.myData.contractCount],
          // toFixed: 1,
          textAlign: 'left',
          content: '{nt}',
          style: {
            fontSize: 26
          }
        }
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  padding: 10px;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 5px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 6px;
      //padding-top: 8px;
      margin-top: 8px;
      width: 33%;
      font-size: 12px;
      height: 70px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
        //margin-left: 5px;
      }
    }
  }
}


</style>