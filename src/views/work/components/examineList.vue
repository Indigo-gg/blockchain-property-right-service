<template>
  <a-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="data"
  >
    <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <a-spin v-if="loadingMore" />
      <a-button v-else @click="onLoadMore">
        加载更多
      </a-button>
    </div>
    <a-list-item slot="renderItem" slot-scope="item">
      <div slot="actions">
        <a-button class="detail-btn" v-if="item.isPublicized">公示</a-button>
        <a-button disabled v-else>已公示</a-button>
      </div>
      <div slot="actions">
        <a-button class="detail-btn" v-if="item.isReturned" >退回</a-button>
        <a-button disabled v-else>已退回</a-button>
      </div>
      <div slot="actions">
        <a-button class="detail-btn" v-if="item.isOnChain">上链</a-button>
        <a-button disabled v-else>已上链</a-button>

      </div>
      <div slot="actions">
        <my-drawer>

        </my-drawer>
        <a-button class="detail-btn" @click="showDetail(item)">详情</a-button>
      </div>
      <a-list-item-meta>
        <div class="name" slot="title">{{ item.artworkName }}</div>
        <div class="author" slot="description">{{ item.userName }}</div>
      </a-list-item-meta>
      <div>
      </div>
    </a-list-item>
  </a-list>
</template>
<script>
// import reqwest from 'reqwest'
import myDrawer from '@/views/components/myDrawer/myDrawer'
// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

export default {
  name: 'ExamineList',
  components: {
    myDrawer
  },
  props: {
    loadData: {
      type: Function,
      require: true,
      default: () => {
        console.log('s-list:无数据')
      }
    }
  },
  data () {
    return {
      data: [],
      loading: true,
      loadingMore: false,
      showLoadingMore: true
    }
  },
  activated () {
    this.$props.loadData().then(res => {
      this.loading = false
      this.data = res.data
      console.log('list-data', this.data)
    })
  },
  methods: {
    onLoadMore () {
      this.loadingMore = true
      this.$props.loadData().then(res => {
        this.data = this.data.concat(res.data)
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      })
    },
    showDetail (data) {
      this.$emit('handleDetail', data)
    }
  }
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
