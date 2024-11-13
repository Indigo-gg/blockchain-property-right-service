<template>
  <div class="monitor" id="monitor">
    <dv-loading style="height: 80vh" v-if="loading">加载中</dv-loading>
      <div v-if="!loading">
        <div class="head">
          <h1>{{ title }}</h1>
          <div class="fullscreen">
            <a v-if="!isFullscreen" @click="enterFullScreen">全屏</a>
            <a v-else-if="isFullscreen" @click="exitFullscreen">退出全屏</a>
          </div>
        </div>
        <div class="main">
          <div class="content-box white">
            <a-row>
              <a-col :span="7">
                <div>
                  <dv-border-box-12  class="block">
                    <general :my-data="general.data[0]"></general>
                  </dv-border-box-12>
                </div>
              </a-col>
              <a-col :span="10">
                <dv-border-box-8   class="block">
                  <node :node="node.data[0]"></node>
                </dv-border-box-8>
              </a-col>
              <a-col :span="7">
                <!-- 中间 -->
                <dv-border-box-13 class="block" style="height: 200px">
                  <trans-day :isFull="isFullscreen" :list="day.data[0]"></trans-day>
                </dv-border-box-13>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="7">
                <dv-border-box-12 class="block bottom">
                  <trans-list :list="trans.data[0]"></trans-list>
                </dv-border-box-12>
              </a-col>
              <a-col :span="10">
                <dv-border-box-13 class="block bottom">
                  <front-find></front-find>
                </dv-border-box-13>
              </a-col>
              <a-col :span="7">
                <dv-border-box-13 class="block bottom">
                  <block :list="block.data[0].data"></block>
                </dv-border-box-13>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
// import '@/views/monitor/css/curCss.css'
import block from '@/views/monitor/components/block'
import frontFind from '@/views/monitor/components/frontFind'
import Node from '@/views/monitor/components/node'
import TransList from '@/views/monitor/components/transList'
import General from '@/views/monitor/components/general'
import TransDay from '@/views/monitor/components/transDay'
import FrontFind from '@/views/monitor/components/frontFind'
import Block from '@/views/monitor/components/block'
import {
  weGetNodeList,
  weGetGeneral,
  weGetTransDayList,
  weGetBlockList,
  weGetTransList,
  weFrontFind
} from '@/api/pageApi'
import { config } from '@/views/monitor/config'
export default {
  name: 'index',
  components: { TransList, Block, General, Node, TransDay, FrontFind },
  comments: {
    block,
    frontFind,
    General,
    Node,
    TransList,
    TransDay
  },
  data () {
    return {
      loading: true,
      isFullscreen: false,
      dom: {},
      title: '监控大屏',
      general: {},
      node: [],
      block: [],
      day: [],
      trans: [],
      front: {},
      timing: null,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      decorationColor: ['#568aea', '#000000']
    }
  },
  watch:{
    isFullscreen(){
      this.loading=true
      setTimeout(()=>{
        this.loading=false
      },300)
    }
  },
  methods: {
    enterFullScreen () {
      this.$fullscreen.enter(this.dom, {
        wrap: false,
        callback: f => {
          this.isFullscreen = !this.isFullscreen
        }
      })
    },
    exitFullscreen () {
      this.$fullscreen.exit(this.dom, {
        wrap: false,
        callback: f => {
          this.isFullscreen = !this.isFullscreen
        }
      })
    },
    async getData () {
      this.general = await weGetGeneral()
      console.log(this.general)

      this.front = await weFrontFind()
      this.node = await weGetNodeList(config.nodeParams)
      this.block = await weGetBlockList(config.params)
      this.day = await weGetTransDayList()
      this.trans = await weGetTransList(config.params)
      setTimeout(()=>{
        this.loading = false
      },100)
    }
  },
  mounted () {
    this.dom = document.getElementById('monitor')
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.fullColor {
  color: #ffffff
}

.bottom{
  height: 400px;
  //padding: 40px;
  margin-top: 20px;
}
.unFullColor {
  color: black;
}

.monitor {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #020308;
}
.block {
  padding: 10px 0;
  //margin: 10px 0;
  //background-color: #0f1f40;
}


.boxall {
  width: 300px;
  min-height: 250px;
}

.fullscreen {
  position: absolute;
  right: 10px;
  top: 0.1em;
}

.white{
  color:#FFFFFF;
}

.fullscreen a {
  /*font-size: 18px;*/
  color: #6682f1;
  font-weight: 700;
}

.title{
  width: 100%;
  text-align: center;
}
.head{ height:30px; background: url(../images/head_bg.png) no-repeat center center; background-size: 100% 100%; position: relative; z-index: 100;}

.head {
  height: 2em;
  position: relative;
  margin: 20px 0;
  text-align: center;
}

.head h1 {
  color: #FFFFFF;
}


</style>
