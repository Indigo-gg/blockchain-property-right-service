<template>
  <div class="user-manage">
    <div class="table">
      <s-table
        ref="table"
        size="default"
        :rowKey="(record) =>record.id"
        :columns="columns"
        :data="loadData"
        :showPagination="false"
      >
      </s-table>
    </div>
  </div>
</template>

<script>
import { getUserList } from '@/api/pageApi'
import { STable } from '@/components'
export default {
  name: 'Index',
  components: {
    STable
  },
  data () {
    return {
      artworks: '0',
      columns: [
        {
          title: 'ID',
          dataIndex: 'id'
        },
        {
          title: '昵称',
          dataIndex: 'name'
        },
        {
          title: '钱包地址',
          dataIndex: 'publicAdd'
        },
        {
          title: '信誉值',
          dataIndex: 'reputation'
        },
        {
          title: '状态',
          dataIndex: 'status'
        },
        {
          title: '操作'
        }
      ],
      queryParam: { },
      loadData: params => {
        const p = Object.assign(params, this.queryParam)
        return getUserList({ p }).then(res => {
          this.handleList(res.data)
          const data = {
            ...res,
            pageNumber: params['pageNumber']
          }
          return data
        })
      }
    }
  },
  methods: {
    handleList (artworks) {
      this.artworks = artworks
    }
  }
}
</script>

<style scoped>

</style>
