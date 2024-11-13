<!--作品上传审核-->
<template>
  <div class="main">
    <a-spin :spinning="loading">
      <a-list :data-source="examineList" :pagination="pagination" v-if="!loading" class="content">
        <a-list-item slot="renderItem" slot-scope="item" class="item">
          <a-list-item-meta>
            <div class="flex-row-start" slot="title">
              <div class="title text-overflow-1">
                <span style="font-weight: 700">{{ item.artworkName }}</span>
              </div>
              <my-avatar-group :authors="item.author">

              </my-avatar-group>
              <!--              <span class="tips"><span class="userName">{{ item.userName }}</span>的举报</span>-->
            </div>
            <div class="description text-overflow-2" slot="description">
              <a-tooltip placement="top">
                <template slot="title">
                  {{ item.artworkInfo }}
                </template>
                {{ item.artworkInfo }}
              </a-tooltip>
            </div>
            <my-img width="100px" height="90px" :src="item.markedfileId" slot="avatar"></my-img>
          </a-list-item-meta>
          <a slot="actions" @click="showPage(item)">查看详情</a>
        </a-list-item>
      </a-list>
    </a-spin>
    <a-drawer
      destroyOnClose
      title="艺术品详情"
      :width="720"
      :visible="isShowInfo"
      :body-style="{ paddingBottom: '80px' }"
      @close="closeInfo"
    >
      <artwork-card
        width="100%"
        height="100%"
        type="large"
        :artwork="curWork"
      ></artwork-card>
      <img-preview :imgs="imgs">
      </img-preview>
      <div class="btn  flex-row-space-around">
        <a-button type="primary" @click="pass(curWork.artworkId)">通过</a-button>
        <a-button type="danger" @click="back(curWork.artworkId)">退回</a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import imgPreview from '@/views/components/imgPreview/imgPreview'
// import '@/utils/generateApiFun'
import { RenderPicture } from '@/api/file'
import { getUploadExamList, setArtworkStatus } from '@/api/pageApi'
import ArtworkCard from '@/views/components/artworkCard/artworkCard'
import MyAvatarGroup from '@/views/components/myAvatarGroup/myAvatarGroup'
import showTip from '@/utils/notification/inedx'

export default {
  name: 'Report',
  components: { MyAvatarGroup, ArtworkCard, imgPreview },
  data () {
    return {
      loading: true,
      visible: false,
      NOT_PASS: 2,
      PASS: 3,
      pagination: {
        onChange: page => {
          this.params.pageNumber = page
          // this.getList(this.params)
        },
        pageSize: 4
        // pageSize: 4
      },
      RenderPicture,
      params: {
        pageSize: 50,
        pageNumber: 1
      },
      statusParams: {
        id: '',
        release_status: ''
      },
      examineList: [],
      imgs: [],
      curWork: {
        artworkId: 0,
        name: '',
        info: '',
        author: '',
        markedfileId: ''
      },
      isShowInfo: false
    }
  },
  methods: {
    transformData (r) {
      this.curWork.artworkId = r.artworkId
      this.curWork.name = r.artworkName
      this.curWork.info = r.artworkInfo
      this.curWork.author = r.author
      this.curWork.markedfileId = r.markedfileId
    },
    getPreViewImg (imgs) {
      const arr = []
      imgs.forEach(img => {
        arr.push({
          src: img.markedfileId
        })
      })
      return arr
    },
    showPage (item) {
      if (item.documentIds && item.documentIds.length > 0) {
        this.transformData(item)
        this.imgs = this.getPreViewImg(item.documentIds)
      }
      // console.log('curItem', item)
      this.isShowInfo = true
    },
    handleSend () {
      setArtworkStatus(this.statusParams).then(res => {
        if (res.ok) {
          this.isShowInfo = false
          this.getList()
          showTip(this, {
            text: '操作成功'
          })
        } else {
          showTip(this, {
            type: 'error',
            text: '通过失败'
          })
        }
      })
    },
    closeInfo () {
      this.isShowInfo = false
    },
    getList () {
      getUploadExamList(this.params).then(res => {
        if (res.ok) {
          this.examineList = res.data
          this.loading = false
          // this.getPreViewImg(res.)
        }
      })
    },
    back (id) {
      this.statusParams.release_status = this.NOT_PASS
      this.statusParams.id = id
      this.handleSend()
    },
    pass (id) {
      this.statusParams.release_status = this.PASS
      this.statusParams.id = id
      this.handleSend()
    }
  },
  activated () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.header-notice {
  display: inline-block;
  transition: all 0.3s;

  span {
    vertical-align: initial;
  }
}

.item {
  //cursor: pointer;
}

.title {
  width: 5em;
  height: 1.5em;
  margin-right: 3px;
  line-height: 1.5em;
  font-size: 18px;
  color: #314659;
}

.content {
  height: 80%;
  overflow-y: scroll;
}

.description {
  margin-top: 20px;
  line-height: 1.5em;
  height: 3em;
}

.tips {
  color: #909399;
  font-size: 4px;
  margin-left: 10px;
}

.userName {
  color: #314659;
}

</style>
