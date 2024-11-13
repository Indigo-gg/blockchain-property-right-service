<template>
  <div class="node">
    <div class="title">
      <a-row>
        <a-col span="20" class="protect-info">
          <div class="title">上传时间：{{ myNode.time }}</div>
          <div class="batch">节点批次：{{ myNode.batch }}</div>
<!--          <div class="hash">上链hash: {{ node.hash }}</div>-->
        </a-col>
        <a-col span="4">
          <div class="status flex-row-end">
            <div style="color: red" v-if="myNode.eviNodeStatus===status.notPass">未通过</div>
            <div style="color: #4ea94e" v-else-if="myNode.eviNodeStatus===status.pass">已通过</div>
            <div style="color: #4dc0c0" v-else-if="myNode.eviNodeStatus===status.undeal">待处理</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="body protect-info">
      <a-row>
        <a-col class="info">
          <div class="info-title">维权内容</div>
          <div class="text">{{ myNode.text }}</div>
        </a-col>
        <a-col class="detect-area">

        </a-col>
      </a-row>
      <div class="sub-title">节点证据</div>
      <a-row type="flex" style="padding: 20px" align="middle" justify="space-between" :gutter="16" class="evidence-area">
        <!--证据存放区-->

        <a-tooltip>
          <div class="flex-col-space-around">
            <div>证据图片</div>
            <mark-preview :imgs="files" @handleMark="waterMarkDetect"></mark-preview>
          </div>
          <div slot="title">查看并检测</div>


        </a-tooltip>
        <div class="flex-col-space-around">

          <node-video style="margin-right: 5vw" width="240px" height="135px" :src="node.videoUrl">

          </node-video>
        </div>

      </a-row>
      <!--上链固化区-->
      <div class="sub-title">水印检测结果</div>
      <a-row type="flex" justify="start" class="evidence-area selected">
        <a-col style="width: 100%">

          <div class="file">
            <a-spin tip="解析中..." size="large" :spinning="loadingMark">
              <div v-if="!loadingMark">
                <mark-res-preview width="200px" height="200px" :public-add="publicAdd" :artwork-hash="artworkHash" v-if="markdPic" :img="markdPic"></mark-res-preview>
                <div v-if="!markdPic" class="empty flex-row-space-around" style="width: 200px;height: 200px">待解析结果</div>
              </div>
               </a-spin>
             </div>
        </a-col>
      </a-row>
      <a-row style="width: 100%" type="flex" justify="end">
        <a-col span="24">
          <div class="actions" v-if="myNode.eviNodeStatus===status.undeal">
            <a-button style="margin: 5px" type="primary" @click="SolidityEvidence" v-if="!solidLoading">证据固化</a-button>
            <a-button style="margin: 5px" type="primary" loading v-else>正在固化</a-button>
            <a-button style="margin: 5px" type="danger" v-if="!failLoading" @click="FailEvidence">驳回节点</a-button>
            <a-button style="margin: 5px" type="danger" loading v-else>正在驳回</a-button>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import {SolidityEvidence,FailEvidence, WaterDetect} from '@/api/pageApi'
import {pageConfig} from '@/views/config/config'
import { RenderPicture } from '@/api/file'
import markPreview from '@/views/components/markPreview/markPreview'
import markResPreview from '@/views/components/markResPreview/markResPreview'
import showTip from '@/utils/notification/inedx'
import nodeVideo from '@/views/components/nodeVedio/nodeVideo'
export default {
  name: 'NodeEvidence',
  components: { markPreview, markResPreview,nodeVideo },
  props: {
    node: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      files: [],
      myNode:{},
      loadingMark:false,
      solidLoading:false,
      selectedFiles: [],
      status:pageConfig.nodeStatus,
      RenderPicture,
      markdPic:undefined,
      publicAdd:undefined,
      artworkHash:undefined,
      failLoading:false
    }
  },
  methods: {
    // 水印检测
    async waterMarkDetect(e) {
      this.loadingMark=true
      const data = {
        artworkId: this.myNode.artworkId,
        evidenceId: this.myNode.evidenceId,
        artworkFileId: this.myNode.uploadFileId,
        extractFileId: e
      }
      const res = await WaterDetect(data)
      // console.log('mark',e)
      this.markdPic=res.data.extractFileId
      this.publicAdd=res.data.publicAdd
      this.artworkHash=res.data.artworkHash
      this.loadingMark=false
    },
    // 证据固化
    async SolidityEvidence() {
      this.solidLoading=true
      const data = {
        evidenceId: this.myNode.evidenceId,
        userId: this.myNode.userId,
        artworkId: this.myNode.artworkId,
        // fileIds: selectedFileIds
        fileIds:this.myNode.fileId,
        videoFileId:this.myNode.videoFileId
      }
      const res = await SolidityEvidence(data)
      // console.log(res)
      this.solidLoading=false
      if(res.ok){
        this.myNode.eviNodeStatus=this.status.pass
      }
    },
    FailEvidence(){
      this.failLoading=true
      FailEvidence({
        evidenceId:this.myNode.evidenceId
      }).then(res=>{
        if(res.ok){
          showTip(this,{
            text:'弃用成功'
          })
          this.failLoading=false
          if(res.ok){
            this.myNode.eviNodeStatus=this.status.notPass
          }
        }
      })
    },
    getFiles(){
      this.files=[]
      let temp=this.myNode.fileId.split(',')
      temp.forEach(img=>{
        this.files.push({
          src:img
        })
      })
      console.log('files',this.files)
    }
  },
  created () {
    this.myNode=this.node
    this.getFiles()
  },
  mounted() {
    // console.log('维权结点传进来的信息', this.node)
    // this.waterMarkDetect()
  }
}
</script>

<style scoped>
.tips {
  font-size: 14px;
  /*background-color: ;*/
  /*margin: 10px;*/
}
.actions{
  text-align: right;
}
.node {
  background-color: #FFFFFF;
  padding: 10px;
}
.sub-title{
  margin: 10px 0;
}
.status {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
.protect-info {
  padding: 20px;
  font-size: 14px;
  /*background-color: #ffffff;*/
  color: #909399;
}
.info {
  background-color: rgba(238, 238, 238, 0.7);
  padding: 10px;
  min-height: 9em;
  border-radius: 5px;
}

.info-title {
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

.text {
  text-indent: 2em;
  border-radius: 5px;
  color: #4b4a4a;
}
.empty{
  background-color: #d3d4d9;
  color: #383636;
}

</style>
