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
      <solt name="actions">
        <a slot="actions">edit</a>
        <a slot="actions">more</a>
      </solt>

      <a-list-item-meta>
        <a slot="title" href="https://www.antdv.com/">{{ item.name.last }}</a>
        <slot name="avatar"></slot>
      </a-list-item-meta>
      <div>
        <solt></solt>
      </div>
    </a-list-item>
  </a-list>
</template>
<script>
// import reqwest from 'reqwest'
//
// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

export default {
  name: 'SList',
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
  mounted () {
    this.$props.loadData(res => {
      this.loading = false
      this.data = res.results
      console.log('list-data', this.data)
    })
  },
  methods: {
    onLoadMore () {
      this.loadingMore = true
      this.$props.loadData(res => {
        this.data = this.data.concat(res.results)
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      })
    }
  }
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
