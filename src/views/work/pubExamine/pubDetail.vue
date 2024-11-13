<template>
  <div class="main">
    <a-spin :spinning="loading">
      <a-row v-if="!loading">
        <a-col span="9">
          <div class="artArea">
            <artwork-card :is-show-author="false" width="100%" height="500px" :artwork="artwork">
            </artwork-card>
          </div>
        </a-col>
        <a-col span="15">
          <div class="reportArea">
            <div class="title">{{ reportTip }}</div>
            <div class="list">
              <a-spin :spinning="reportLoading">
                <a-list :data-source="reportList" v-if="!reportLoading" class="content">
                  <a-list-item slot="renderItem" slot-scope="item" class="item">
                    <a-list-item-meta>
                      <div class="title text-overflow-1" slot="title">
                        {{ item.artworkName }}
                        <span class="tips">来自用户<span class="userName">{{ item.userName }}</span>的举报</span>
                      </div>
                      <div class="description text-overflow-2" slot="description">
                        {{ item.reportInfo }}
                      </div>
                      <my-img width="60px" height="60px" :src="item.markedfileId" slot="avatar"></my-img>
                    </a-list-item-meta>
                    <a slot="actions" @click="toReportPage(item)">举报详情</a>
                  </a-list-item>
                </a-list>
              </a-spin>
            </div>
            <div class="btn  flex-row-space-around">
              <a-button type="primary" @click="pass" v-if="!isUpLink">上链</a-button>
              <a-button type="primary" @click="pass" loading v-else>上链中</a-button>
              <a-button type="danger" @click="back">退回</a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-spin>
  </div>
</template>

<script>
// import '@/utils/generateApiFun'
// import {getReportDetail} from '@/api/pageApi'
import { RenderPicture } from '@/api/file'
import reportCard from '@/views/components/reportCard/reportCard'
import artworkCard from '@/views/components/artworkCard/artworkCard'
import showTip from '@/utils/notification/inedx'

import { setWatermark, upLink, getPubReportListById, setArtworkStatus } from '@/api/pageApi'
export default {
  name: 'PubDetail',
  components: {
    artworkCard,
    reportCard
  },
  data () {
    return {
      pubWork:{},
      RenderPicture,
      reportTip: '作品举报列表',
      reportLoading: true,
      artworkId: 0,
      reportId: undefined,
      loading: true,
      HAS_PASS: 2,
      NOT_PASS: 3,
      UN_DEAL: 1,
      PUB_TYPE: 1,
      SHOP_TYPE: 2,
      reportList: [],
      isUpLink:false,
      listParams: {
        pageSize: 20,
        pageNumber: 1
      },
      artwork: {
        markedfileId: '',
        fileId:'',
        author: [],
        info: '',
        name: '',
        artworkId: 0
      },
      BackStatus: 2
    }
  },
  methods: {
    transformData (r) {
      this.artwork.artworkId = r.artworkId
      this.artwork.info = r.artworkInfo
      this.artwork.author = r.author
      this.artwork.markedfileId = r.markedfileId
      this.artwork.name = r.artworkName
    },
    // async getWorkBrief () {
    //  const res = await getArtworkBrief({ artworkId: this.artworkId })
    //   if (res.ok) {
    //     this.transformData(res.data)
    //     this.loading = false
    //   }
    // },
    getExamList () {
      getPubReportListById({ artworkId: this.pubWork.artworkId }).then(res => {
        if (res.ok) {
          this.reportList = res.data.report
          this.reportLoading = false
        }
      })
    },
    toReportPage (item) {
      this.$router.push({ name: 'reportDetail',
        params: { reportId: item.reportId } })
    },
    toPubList () {
      this.$router.push({ path: '/work/pubExamine' })
    },
    pass () {
      this.isUpLink=true
        upLink({ artworkId: this.pubWork.artworkId }).then(res => {
          if (res.ok) {
                showTip(this, {
                  text: '上链成功'
                })
            setWatermark({artworkId:this.pubWork.artworkId,fileId:this.pubWork.fileId})
            this.isUpLink=false
            this.toPubList()
          } else {
            showTip(this, {
              type: 'error',
              text: '上链失败'
            })
            this.isUpLink=false
          }

        })
    },
    back () {
      setArtworkStatus({ id: this.pubWork.artworkId, release_status: this.BackStatus }).then(res => {
        if (res.ok) {
          showTip(this, {
            text: '退回成功'
          })
          this.toPubList()
        } else {
          showTip(this, {
            type: 'error',
            text: '退回失败'
          })
        }
      })
    }
  },

  watch: {
    // 监听路由是否变化
    '$route' (to, from) {
      if (to.name === 'pubDetail') {
        if (to.params.pubWork !== from.params.pubWork) {
          this.pubWork = JSON.parse(to.params.pubWork )// 把最新id赋值给定义在data中的id
          // this.getWorkBrief(this.artworkId)
              this.loading = false
          this.transformData(this.pubWork)
          this.getExamList(this.pubWork.artworkId) // 重新调用加载数据方法
        }
      }
    }
  },
  mounted () {
    this.pubWork = JSON.parse(this.$route.params.pubWork)
    console.log('拿到的pubwork',this.pubWork)
    this.transformData(this.pubWork)
        this.loading = false

    // console.log('页面Id', this.reportId)
    this.getExamList()
  }
}
</script>

<style scoped>
.artArea {
  height: 500px;
  width: 100%;
  padding: 10px;
  background-color: #FFFFFF;
}
.title{
  width: 100%;
  padding: 10px;
}

.reportArea {
  margin-left: 10px;
  height: 500px;
  width: 100%;
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 5px;
}
.list{
  height: 350px;
  overflow-y: scroll;
}

.actions {
  width: 100%;
  padding: 20px;
}

.btn {
  margin-top: 30px;
}

.status-pass {
  color: #52c41a;
}

.status-unpass {
  color: #909399;
}

.passtip {
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
}
</style>
