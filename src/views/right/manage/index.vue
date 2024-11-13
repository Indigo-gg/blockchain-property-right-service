<template>
  <div class="main">
    <a-spin :spinning="loading">
      <a-list :data-source="rightList" :pagination="pagination" v-if="!loading" class="content">
        <a-list-item slot="renderItem" slot-scope="item" class="item">
          <a-list-item-meta>
            <div class="flex-row-space-between" slot="title">
              <div class="title flex-row-space-between">
                <span class="artworkName text-overflow-1">{{ item.artworkName }}</span>
                <span class="status">
                  <a-tag color="green" v-if="item.isTorted===status.isPass">
                    已通过
                  </a-tag>
                  <a-tag color="red" v-else-if="item.isTorted===status.noPass">
                    未通过
                  </a-tag>
                  <a-tag color="blue" v-else-if="item.isTorted===status.unDeal">
                    待审核
                  </a-tag>
                </span>
              </div>
            </div>
            <div class="description" slot="description">
              <a-row type="flex" align="bottom">
                <a-col span="16">
                  <div class="time">
                    <div class="createdTime"><span class="tip">{{ tips.create }}</span>{{ item.createdTime }}</div>
                    <div class="updatedTime"><span class="tip">{{ tips.update }}</span>{{ item.updatedTime }}</div>
                  </div>
                </a-col>
                <a-col span="8">
                  <div class="user">维权用户：<span class="userName">{{ item.name }}</span></div>
                </a-col>
              </a-row>

            </div>
          </a-list-item-meta>
          <a slot="actions" @click="toDetail(item)">查看详情</a>
        </a-list-item>
      </a-list>
    </a-spin>
  </div>
</template>

<script>
import '@/utils/generateApiFun'
import { RenderPicture } from '@/api/file'
import { getRightList } from '@/api/pageApi'
import { pageConfig } from '@/views/config/config'
export default {
  name: 'Index',
  data () {
    return {
      RenderPicture,
      status: pageConfig.Torte,
      loading: true,
      rightList: [],
      params: {
        pageSize: 20,
        pageNumber: 1
      },
      tips: {
        create: '创建时间：',
        update: '最后一次更新：'
      },
      curEvent: {},
      pagination: {
        onChange: page => {
          // this.params.pageNumber = page
          // this.getList(this.params)
        },
        pageSize: 4
        // pageSize: 4
      }
    }
  },
  methods: {
    toDetail (item) {
      this.$router.push({ name: 'rightDetail',
        params: { safeRecordId: item.id } })
    },
    getRightList () {
      getRightList(this.params).then(res => {
        if (res.ok) {
          this.loading = false
          this.rightList = res.data.reverse()
        }
      })
    }

  },
  activated () {
    this.getRightList()
  }
}
</script>

<style scoped>
.item{
  background-color: #FFFFFF;
  padding: 10px;
}
.artworkName{
  font-size: 18px;
  font-weight: 700;
}
.artworkName{
  width: 10em;
}
.userName{
  font-weight: 700;
}
.time{
  font-size: 9px;
}
.status{
  margin-left: 10px;
 }

.user{
  margin: 0 10px;
  width: 100%;
  font-size: 10px;
  text-align: left;
}
.description{
  width: 100%;
}
</style>
