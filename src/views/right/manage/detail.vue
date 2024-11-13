<template>
  <div class="protect-detail-page right-protect-center-page">
    <a-page-header class="page-header flex-row-start">
      <span slot="back-icon"><svg-icon icon="arrow-left"></svg-icon></span>
      <span class="page-title" slot="title">藏品<span class="artwork-name">{{
        details.artworkName
      }}</span>的维权详情</span>
      <!--      <span class="sub-title" slot="subTitle">流水号:{{ details.safeRecordId }}</span>-->
    </a-page-header>
    <div class="section">
      <div class="title">藏品信息</div>
      <a-spin :spinning="loadArtwork">
        <div class="content">
          <a-row class="artwork-info" v-if="!loadArtwork" type="flex">
            <a-col :span="8">
              <!--              <my-img-->
              <!--                width="40vw"-->
              <!--                height="15vw"-->
              <!--                :src="RenderImg(artworkInfo.fileId)"-->
              <!--                img-class="cover">-->
              <!--              </my-img>-->
              <artwork-card :is-show-info="false" img-height="200px" img-width="100%" :artwork="myCardInfo">

              </artwork-card>
            </a-col>
            <a-col :span="16">
              <a-descriptions title="藏品简介">
                <a-descriptions-item class="text-overflow-1" label="藏品ID">
                  {{ artworkInfo.id }}
                </a-descriptions-item>
                <a-descriptions-item label="名称">
                  <span class="label-info text-overflow-1">
                    {{ artworkInfo.name }}
                  </span>
                </a-descriptions-item>
                <a-descriptions-item label="创建时间">
                  {{ artworkInfo.createdTtime }}
                </a-descriptions-item>
                <a-descriptions-item label="发行状态">
                  <a-tag :color="releaseStatus.color">{{ releaseStatus.text }}</a-tag>
                </a-descriptions-item>
<!--                <a-descriptions-item :span="2" label="上链哈希">-->
<!--                  <div class="hash">{{ artworkInfo.hash }}</div>-->
<!--                </a-descriptions-item>-->
                <a-descriptions-item :span="4" label="藏品介绍">
                  {{ artworkInfo.info }}
                </a-descriptions-item>
              </a-descriptions>
            </a-col>
          </a-row>
        </div>
      </a-spin>
    </div>
    <div class="section">
      <div class="title">维权状态概览</div>
      <div class="content">
        <a-spin :spinning="loadNode">
          <div class="protect-info" v-if="!loadNode">
            <div>流水号:<span>{{ details.safeRecordId }}</span></div>
<!--            <div>维权状态: <span class="status">-->
<!--              <a-tag color="green" v-if="details.isTorted===status.isPass">-->
<!--                已审核-->
<!--              </a-tag>-->
<!--              <a-tag color="red" v-else-if="details.isTorted===status.isDeal">-->
<!--                审核中-->
<!--              </a-tag>-->
<!--              <a-tag color="blue" v-else-if="details.isTorted===status.unDeal">-->
<!--                待审核-->
<!--              </a-tag>-->
<!--            </span></div>-->
            <div>证据节点数: <span class="number">{{ evidences.length }}</span></div>
            <div>维权发起时间: <span>{{ details.createdTime }}</span></div>
            <div v-if="details.updatedTime">维权更新时间: <span>{{ details.updatedTime }}</span></div>
          </div>
        </a-spin>

      </div>
    </div>
    <div class="section">
      <div class="title">证据链</div>
      <div class="content">
        <a-spin :spinning="loadNode">
          <div id="time-line" v-if="!loadNode">
<!--            <xyz-transition-group appear xyz="fade down-1 right-2 stagger-1">-->
              <!--          <xyz-transition-group appear xyz="fade down-1 right-2 stagger-1">-->
              <!--            TODO:结点状态对应不同的结点颜色-->
              <a-timeline-item v-for="node in evidences" :key="node.batch">
                <node-evidence
                  :node="{...node,userId:details.userId,uploadFileId:details.fileId,artworkId:details.artworkId}"></node-evidence>
              </a-timeline-item>
<!--            </xyz-transition-group>-->
          </div>
        </a-spin>

      </div>
    </div>
<!--    <div class="actions">-->
<!--      <a-row>-->
<!--        <a-col>-->
<!--          <div class="actions flex-row-space-around">-->
<!--            <a-button type="primary">通过</a-button>-->
<!--            <a-button type="danger">退回</a-button>-->
<!--          </div>-->
<!--        </a-col>-->
<!--      </a-row>-->
<!--    </div>-->
<!--    <img :src="RenderImg('S35ukjZKXv4')" alt="">-->

  </div>
</template>
<script>
import { getRightInfo, getArtworkDetail} from '@/api/pageApi'
import { RenderPicture } from '@/api/file'
// import { getArtworkDetail } from '@/api/pageApi'
import artworkCard from '@/views/components/artworkCard/artworkCard'
import myImg from '@/views/components/myImg/myImg'
import { pageConfig } from '@/views/config/config'
import NodeEvidence from '@/views/components/nodeEvidence/nodeEvidence'

export default {
  name: 'Detail',
  components: {
    NodeEvidence,
    myImg,
    artworkCard
  },
  data () {
    return {
      getTag: pageConfig.getTag,
      releaseStatus: {},
      status: pageConfig.Torte,
      safeRecordId: '',
      loadArtwork: true,
      loadNode: true,
      details: {},
      artworkInfo: {},
      myCardInfo: {
        markedfileId: '',
        author: [],
        info: '',
        name: '',
        artworkId: 0
      },
      artworkInfoLoaded: false,
      protectId: '',
      evidences: []
    }
  },
  methods: {
    transform (r) {
      this.myCardInfo.artworkId = r.artworkId
      this.myCardInfo.info = r.info
      this.myCardInfo.author = r.author
      this.myCardInfo.markedfileId = r.markedfileId
      this.myCardInfo.name = r.artworkName
    },
    RenderImg (src) {
      return RenderPicture(src)
    },
    getDetail (safeRecordId) {
      this.details = {}
      this.evidences = []
      getRightInfo({ safeRecordId }).then(res => {
        if (res.ok) {
          this.details = res.data
          this.evidences = res.data.evidences
          console.log('details', this.details)
          this.loadNode = false
          this.getArtworkInfo(this.details.artworkId)
        }
      })
    },
    getArtworkInfo (artId) {
      getArtworkDetail({ artId }).then(res => {
        if (res.ok) {
          this.artworkInfo = res.data[0]
          this.releaseStatus = this.getTag(this.artworkInfo.releaseStatus)
          this.transform(this.artworkInfo)
          this.loadArtwork = false
        }
      })
    }
  },
  watch: {
    // 监听路由是否变化
    '$route' (to, from) {
      if (to.name === 'rightDetail') {
        if (to.params.safeRecordId !== from.params.safeRecordId) {
          this.safeRecordId = to.params.safeRecordId // 把最新id赋值给定义在data中的id
          this.getDetail(this.safeRecordId) // 重新调用加载数据方法
        }
      }
    }
  },
  async mounted () {
    this.safeRecordId = this.$route.params.safeRecordId
    this.getDetail(this.safeRecordId)
  }
}
</script>

<style scoped lang="less">
.page-title {
  color: #909399;
}

.content {
}

.artwork-name {
  font-size: 24px;
  margin: 0 4px;
  color: #110101;
}

.protect-info {
  padding: 20px;
  font-size: 14px;
  background-color: #ffffff;
  color: #909399;
}

.protect-info span {
  margin: 10px;
  //height: 4em;
  font-size: 18px;
  //color: #333333;
}

.hash {
  padding: 5px;
  width: 30em;
  font-size: 8px;
  //overflow-y: scroll;
  text-wrap: normal;
  height: 4em;
}

.protect-detail-page {
  color: #0e0011;
  //background-color: #dff0d8;

  .section {
    width: 95%;
    padding: 0.5em 1em;
    margin: 0 auto;

    .sub-title {
      height: 2em;
      line-height: 2em;
    }

    .title {
      font-size: 1.25em;
      color: #999999;
      font-weight: bold;
      margin: 1em 0;
      margin-left: -1em;
    }

    .content {
      //padding: 1.5em;
      border-radius: 6px;
      background-color: #f1f5f6;
    }
  }
}

.actions {
  margin: 20px;
}

.number {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  line-height: 1.5em;
  border-radius: 0.5em;
  //font-size: 32px;
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.89);
}

.label-info {
  width: 4em;
  height: 2em;
  line-height: 2em;
}

.artwork-info {
  padding: 20px;
  background-color: #ffffff;

  .cover {
    width: 150px;
    height: 150px;
  }
}

</style>
