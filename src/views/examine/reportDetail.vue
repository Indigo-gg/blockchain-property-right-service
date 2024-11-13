<template>
  <div class="main">
    <a-spin :spinning="loading">
      <a-row v-if="!loading">
        <a-col span="9">
          <div class="artArea">
            <artwork-card width="100%" height="400px" :artwork="artwork">
            </artwork-card>
          </div>
        </a-col>
        <a-col span="15">
          <div class="reportArea">
            <report-card :report="report">
            </report-card>
<!--            <div class="attach">-->
<!--              附件：-->
<!--            </div>-->
            <div class="actions" v-if="report.reportStatus===UN_DEAL">
              <div class="back-info">
                <a-textarea placeholder="输入审核理由" v-model="params.backInfo">
                </a-textarea>
              </div>
              <div class="btn  flex-row-space-around">
                <a-button type="primary" @click="pass">通过</a-button>
                <a-button type="danger" @click="back">退回</a-button>
              </div>
            </div>
            <div class="status-pass passtip" v-else>
              已审核
            </div>

          </div>
        </a-col>
      </a-row>
    </a-spin>
  </div>
</template>

<script>
// import imgPreview from '@/views/components/imgPreview/imgPreview'
// import '@/utils/generateApiFun'
// import {getReportDetail} from '@/api/pageApi'
// import { RenderPicture } from '@/api/file'
import reportCard from '@/views/components/reportCard/reportCard'
import artworkCard from '@/views/components/artworkCard/artworkCard'
import { getReportDetail, setShopReport, setPubReport } from '@/api/pageApi'
import showTip from '@/utils/notification/inedx'
import { RenderPicture } from '@/api/file'

export default {
  name: 'ReportDetail',
  components: {
    artworkCard,
    reportCard
  },
  data () {
    return {
      RenderPicture,
      reportId: undefined,
      loading: true,
      HAS_PASS: 2,
      NOT_PASS: 3,
      UN_DEAL: 0,
      PUB_TYPE: 1,
      SHOP_TYPE: 2,
      artwork: {
        markedfileId: '',
        author: [],
        info: '',
        name: '',
        artworkId: 0
      },
      report: {
        artworkId:0,
        reportUserId: 0,
        reportUserName: '',
        reportAvatar: '',
        reportInfo: '',
        docFile: [],
        reportType: 0,
        // picFile: [],
        reportStatus: 1,
        imgs: []
      },
      params: {
        reportId: 0,
        status: 0,
        backInfo: ''
      }
    }
  },
  methods: {
    transformData (r) {
      this.artwork.artworkId = r.artworkId
      this.artwork.info = r.artworkInfo
      this.artwork.author = r.author
      this.artwork.markedfileId = r.markedfileId
      this.artwork.name = r.artworkName
      this.report.reportUserId = r.reportUserId
      this.report.reportUserName = r.reportUserName
      this.report.reportAvatar = r.reportAvatar
      this.report.reportInfo = r.reportInfo
      this.report.docFile = r.docFile
      this.report.artworkId = r.artworkId
      this.report.reportType = r.reportType
      // this.report.picFile = r.picFile
      this.report.reportStatus = r.reportStatus
    },
    getReportDetail (id) {
      this.loading = true
      getReportDetail({ reportId: id }).then(res => {
        // console.log('res-report', res)
        this.transformData(res.data)
        this.img = []
        this.report.docFile.forEach(item => {
          this.img.push({
            src: item.docFileId
          })
        })
        console.log('res-report', res.data)
        this.loading = false
      })
    },
    handleSend () {
      this.params.reportId = this.reportId
      console.log('params', this.params)
      if (this.report.reportType === this.SHOP_TYPE) {
        setShopReport(this.params).then(res => {
          if (res.ok) {
            showTip(this, {
              text: '操作成功'
            })
            this.getReportDetail(this.reportId)
          } else {
            showTip(this, {
              type: 'error',
              text: '操作失败'
            })
          }
        })
      } else if (this.report.reportType === this.PUB_TYPE) {
        setPubReport(this.params).then(res => {
          if (res.ok) {
            showTip(this, {
              text: '操作成功'
            })
            this.getReportDetail(this.reportId)
          } else {
            showTip(this, {
              type: 'error',
              text: '操作失败'
            })
          }
        })
      }
      // changeReportStatus(this.params).then(res => {
      //   if (res.ok) {
      //     this.getReportDetail(this.reportId)
      //   }
      // })
    },
    back () {
      this.params.status = this.NOT_PASS
      this.handleSend()
    },
    pass () {
      this.params.status = this.HAS_PASS
      this.handleSend()
    }
  },

  watch: {
    // 监听路由是否变化
    '$route' (to, from) {
      if (to.name === 'reportDetail') {
        if (to.params.reportId !== from.params.reportId) {
          this.reportId = to.params.reportId // 把最新id赋值给定义在data中的id
          this.getReportDetail(this.reportId) // 重新调用加载数据方法
        }
      }
    }
  },
  mounted () {
    this.params.backInfo = ''
    this.reportId = this.$route.params.reportId
    // console.log('页面Id', this.reportId)
    this.getReportDetail(this.reportId)
  }
}
</script>

<style scoped>
.artArea {
  height: 600px;
  width: 100%;
  padding: 10px;
  background-color: #FFFFFF;
}

.reportArea {
  margin-left: 10px;
  height: 600px;
  width: 100%;
  background-color: #FFFFFF;
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
