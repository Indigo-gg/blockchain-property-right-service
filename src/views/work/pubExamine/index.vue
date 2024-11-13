<template>
  <div class="main">
    <a-spin :spinning="loading">
      <a-list :data-source="pubList" :pagination="pagination" v-if="!loading" class="content">
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
          <a slot="actions" @click="toPubPage(item)">查看详情</a>
        </a-list-item>
      </a-list>
    </a-spin>
  </div>
</template>

<script>
import { RenderPicture } from '@/api/file'
import { getPubExamList } from '@/api/pageApi'
import myAvatarGroup from '@/views/components/myAvatarGroup/myAvatarGroup'
export default {
  components:{
    myAvatarGroup
  },
  name: 'Index',
  data () {
    return {
      loading: true,
      visible: false,
      pagination: {
        onChange: page => {
          this.params.pageNumber = page
          // this.getPubList(this.params)
        },
        pageSize: 20
        // pageSize: 4
      },
      RenderPicture,
      params: {
        pageSize: 30,
        pageNumber: 1
      },
      pubList: []

    }
  },
  methods: {
    getPubList () {
      getPubExamList(this.params).then(res => {
        if (res.ok) {
          this.pubList = res.data
          this.loading = false
        }
      })
    },
    toPubPage (item) {
      let pubWork=JSON.stringify(item)
      this.$router.push({
        name: 'pubDetail',
        params: { pubWork: pubWork }
      })
    }
  },
  activated () {
    this.getPubList()
  }
}
</script>

<style scoped>
.title{
  width: 5em;
}
</style>
