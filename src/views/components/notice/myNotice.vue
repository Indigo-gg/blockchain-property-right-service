<template>
  <a-popover
    v-model="visible"
    trigger="click"
    placement="bottomRight"
    overlayClassName="header-notice-wrapper"
    :getPopupContainer="() => $refs.noticeRef.parentElement"
    :autoAdjustOverflow="true"
    :arrowPointAtCenter="true"
    :overlayStyle="{ width: '300px', top: '50px' }"
  >
    <template slot="content">
      <a-spin :spinning="loading">
        <a-tabs>
          <a-tab-pane tab="公示区举报" key="1">
            <a-list :data-source="examinePubList" v-if="!loading" class="content">
              <a-list-item class="item" slot="renderItem" slot-scope="item" @click="toReportPage(item)">
                <a-list-item-meta>
                  <div class="title text-overflow-1" slot="title">
                    {{ item.artworkName }}
                    <span class="tips">来自<span class="userName">{{ item.userName }}</span>的举报</span>
                  </div>
                  <div class="description text-overflow-1" slot="description">
                    {{ item.reportInfo }}
                  </div>
                  <a-avatar
                    style="background-color: white"
                    slot="avatar"
                    shape="square"
                    :src="RenderPicture(item.fileId)"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="商城区举报" key="2">
            <a-list :data-source="examineShopList" v-if="!loading" class="content">
              <a-list-item class="item" slot="renderItem" slot-scope="item" @click="toReportPage(item)">
                <a-list-item-meta>
                  <div class="title text-overflow-1" slot="title">
                    {{ item.artworkName }}
                    <span class="tips">来自<span class="userName">{{ item.userName }}</span>的举报</span>
                  </div>
                  <div class="description text-overflow-1" slot="description">
                    {{ item.reportInfo }}
                  </div>
                  <a-avatar
                    style="background-color: white"
                    slot="avatar"
                    shape="square"
                    :src="RenderPicture(item.fileId)"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>

          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
    <span @click="fetchNotice" class="header-notice" ref="noticeRef" style="padding: 0 18px">
      <a-badge :count="examineShopList.length+examinePubList.length">
        <a-icon style="font-size: 16px; padding: 4px" type="bell" />
      </a-badge>
    </span>
  </a-popover>
</template>

<script>
import { getReportList } from '@/api/pageApi'
import { RenderPicture } from '@/api/file'
export default {
  name: 'MyNotice',
  data () {
    return {
      loading: false,
      visible: false,
      RenderPicture,
      params_1: {
        pageSize: 8,
        pageNumber: 1,
        // 0-返回未受理审核的举报列表；1-返回已受理的举报列表
        reportStatus: 0,
        // 1-公示期举报列表，2-销售期举报列表
        artworkStatus: 1
      },
      params_2: {
        pageSize: 8,
        pageNumber: 1,
        // 0-返回未受理审核的举报列表；1-返回已受理的举报列表
        reportStatus: 0,
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
        }
      })
    },
    getShopList () {
      getReportList(this.params_2).then(res => {
        if (res.ok) {
          this.examineShopList = res.data
        }
      })
    },
    toReportPage (item) {
      this.$router.push({ name: 'reportDetail', params: { reportId: item.reportId } })
    }
  },
  mounted () {
    this.getPubList()
    this.getShopList()
  }
}
</script>

<style lang="css">
.header-notice-wrapper {
  top: 50px !important;
}
</style>
<style lang="less" scoped>
.header-notice {
  display: inline-block;
  transition: all 0.3s;

  span {
    vertical-align: initial;
  }
}

.header-notice {
  cursor: pointer;
}

.content {
  height: 300px;
  overflow-y: scroll;
}

.item{
  cursor: pointer;
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
