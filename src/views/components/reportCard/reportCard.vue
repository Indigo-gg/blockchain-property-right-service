
<template>
  <div class="report">
    <div class="top">
      来自用户
      <div class="avatar">
        <a-avatar :src="RenderPicture(report.reportAvatar)"></a-avatar>
      </div>
      <div class="name">
        {{ report.reportUserName }}
      </div>
      的举报
    </div>
    <div class="body" :style="{height:textHeight}">
      <!--      <article-list-content update-at="111" href="http://baidu.com" avatar="" owner="000">-->
      <!--      </article-list-content>-->
      <div class="info">
        简介：{{ report.reportInfo }}
      </div>
    </div>
    <div class="attach">
      <!--      <div class="imgs flex-row-start">-->
      <!--        <div class="img" v-for="(item, index) in report.picFile" :key="index">-->
      <!--          <my-img @click="preview(item)" :alt="item.name" width="60px" height="60px" :src="RenderPicture(item.fileId)">-->
      <!--          </my-img>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="files">
        <div>
          <div class="tips">
            证据：
          </div>
          <img-preview :imgs="imgs">
          </img-preview>
        </div>
        <div class="btn" style="margin-top: 35px">
          <a-button type="success" size="small" v-if="!isCompare" @click="artCompare">
            <a-icon type="monitor" />
            一键检测相似度</a-button>
          <a-button type="success" v-else loading>相似度比对中</a-button>
        </div>
        <div class="result">
          <div>
           <span style="font-size: 18px">相似度检测结果:</span>
            {{compareDeg}}%
          </div>
          <div>

          </div>
        </div>
<!--        <div class="result">-->
<!--          7%-->
<!--        </div>-->
      </div>
    </div>
<!--    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">-->
<!--      <my-img alt="example" style="width: 100%" :src="RenderPicture(curImg)" />-->
<!--    </a-modal>-->
  </div>
</template>

<script>
import { ArticleListContent } from '@/components'
import { RenderPicture } from '@/api/file'
import { artworkCompare } from '@/api/pageApi'
import imgPreview from '@/views/components/imgPreview/imgPreview'
export default {
  name: 'ReportCard',
  components: {
    ArticleListContent,
    imgPreview
  },
  props: {
    report: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      RenderPicture,
      textHeight: '200px',
      curImg: '',
      imgs:[],
      compareDeg:'N',
      isCompare:false,
      previewVisible: false
    }
  },
  methods: {
    artCompare(){
      this.isCompare=true
      let testData={
        artworkId:this.report.artworkId,
        comparedId:this.report.docFile[0].docFileId
      }
      artworkCompare(testData).then(res=>{
        this.isCompare=false
        this.compareDeg=Math.round(res.data.similarity * 100) / 100;
      })


    },
    // preview (item) {
    //   this.curImg = item.fileId
    //   this.previewVisible = true
    // },
    // handleCancel () {
    //   this.previewVisible = false
    // },
    getPreViewImg (imgs) {
      const arr = []
      imgs.forEach(img => {
        arr.push({
          src: RenderPicture(img.docFileId)
        })
      })
      return arr
    },
  },
  mounted () {
    console.log('举报详情页',this.report)
    this.imgs = this.getPreViewImg(this.report.docFile)
  }
}
</script>

<style scoped>
.report{
  /*padding: 20px;*/
  margin: 0 20px;
  /*background: #909399;*/
}
.top{
  display: flex ;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
.name,.avatar{
  margin: 0 5px;
  color: #333333;
  font-weight: 700;
}

.body{
  border-radius: 5px;

  background-color: #f7f8fc;
  padding: 10px;
  overflow-y: scroll;
}
.info{
  text-indent: 2em;
}

.imgs{
  padding: 10px;
  width: 100%;
  overflow-x: scroll;
}
.img{
  margin: 5px;
  width: 60px;
  height: 60px;
}
.files{
  position: relative;
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
}
.result{
  position: absolute;
  right: 10px;
  bottom: 40px;
  font-size: 24px;
  font-weight: 700;
  color: #52c41a;
  font-style: italic;
  /*float: right;*/
  margin: 40px;
}
.file{
  margin: 5px 0;
}
.back-info{
  margin-top: 20px;
}

</style>
