<template>
  <div class="main">
    <div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="公示作品审核">
          <a-spin :spinning="loading">
            <a-list :data-source="examinePubList" :pagination="pagination" v-if="!loading" class="content">
              <a-list-item slot="renderItem" slot-scope="item" class="item">
                <a-list-item-meta>
                  <div class="title text-overflow-1" slot="title">
                    {{ item.artworkName }}
                    <span class="tips">来自用户<span class="userName">{{ item.userName }}</span>的举报</span>
                  </div>
                  <div class="description text-overflow-2" slot="description">
                    {{ item.reportInfo }}
                  </div>
                  <my-img width="100px" height="90px" :src="item.markedfileId" slot="avatar"></my-img>
                </a-list-item-meta>
                <a slot="actions" @click="toReportPage(item)">举报详情</a>
              </a-list-item>
            </a-list>
          </a-spin>
        </a-tab-pane>
        <a-tab-pane key="2" tab="商城公示举报" force-render>
          <a-spin :spinning="loading">
            <a-list :data-source="examineShopList" :pagination="pagination_2" v-if="!loading" class="content">
              <a-list-item slot="renderItem" slot-scope="item" class="item" @click="toReportPage(item)">
                <a slot="actions" @click="toReportPage(item)">举报详情</a>
                <a-list-item-meta>
                  <div class="title text-overflow-1" slot="title">
                    {{ item.artworkName }}
                    <span class="tips">来自用户<span class="userName">{{ item.userName }}</span>的举报</span>
                  </div>
                  <div class="description text-overflow-2" slot="description">
                    {{ item.reportInfo }}
                  </div>
                  <my-img width="100px" height="90px" :src="item.markedfileId" slot="avatar"></my-img>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-spin>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import '@/utils/generateApiFun'
import { RenderPicture } from '@/api/file'
import { getReportList } from '@/api/pageApi'
export default {
  name: 'Report',
  data () {
    return {
      loading: true,
      visible: false,
      pagination: {
        onChange: page => {
          this.params.pageNumber = page
          // this.getPubList(this.params)
        },
        pageSize: 4
        // pageSize: 4
      },
      pagination_2: {
        onChange: page => {
          this.params.pageNumber = page
        },
        pageSize: 4
        // pageSize: 4
      },
      RenderPicture,
      params_1: {
        pageSize: 20,
        pageNumber: 1,
        // 0-返回未受理审核的举报列表；1-返回已受理的举报列表
        reportStatus: 0,
        // 1-公示期举报列表，2-销售期举报列表
        artworkStatus: 1
      },
      params_2: {
        pageSize: 20,
        pageNumber: 1,
        // 1-返回未受理审核的举报列表；2-返回已受理的举报列表
        reportStatus: 1,
        // 1-公示期举报列表，2-销售期举报列表
        artworkStatus: 2
      },
      examinePubList: [],
      examineShopList: []
    }
  },
  methods: {
    fetchNotice () {
      if (!this.visible) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.loading = false
      }
      this.visible = !this.visible
    },
    getPubList () {
      getReportList(this.params_1).then(res => {
        if (res.ok) {
          this.examinePubList = res.data
          this.loading = false
        }
      })
    },
    getShopList () {
      getReportList(this.params_2).then(res => {
        if (res.ok) {
          this.examineShopList = res.data
          this.loading = false
        }
      })
    },
    toReportPage (item) {
      this.$router.push({ name: 'reportDetail',
params: { reportId: item.reportId } })
    }
  },
  activated () {
    this.getPubList()
    this.getShopList()
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
.item{
  //cursor: pointer;
}
.title{
  font-size: 18px;
  color: #314659;
}
.content {
  height: 80%;
  overflow-y: scroll;
}
.description{
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
  color: #0e0e0e;
  padding: 0 3px;
  //font-weight: 700;
  font-size: 16px;
}

</style>
