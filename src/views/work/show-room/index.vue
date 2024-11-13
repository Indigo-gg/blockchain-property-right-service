<template>
  <div class="show-room">
    <div class="table">
      <s-table
        ref="table"
        size="default"
        :rowKey="(record) =>record.showroomId"
        :columns="columns"
        :data="loadData"
        :showPagination="false"
        :scroll="{ y: 540 }"
      >
        <a color="#787878" slot="name" slot-scope="text">{{ text }}</a>
      </s-table>
    </div>
  </div>
</template>

<script>
import { getRooms } from '@/api/pageApi'
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
          dataIndex: 'showroomId'
        },
        {
          title: '馆名',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '馆长',
          dataIndex: 'promoterName'
        },
        {
          title: '类型',
          dataIndex: 'pattern'
        },
        {
          title: '共创者',
          dataIndex: 'jointa'
        },
        {
          title: '热度',
          dataIndex: 'heat'
        },
        {
          title: '浏览量',
          dataIndex: 'view'
        },
        {
          title: '展馆介绍',
          dataIndex: 'info',
          width: 200
        },
        {
          title: '操作',
          customRender: () => {
            const text = '冻结'
            const dom = <a-button></a-button>
            this.$nextTick(() => {
              dom.elm.innerHTML = text
            })
            return dom
          }
        }
      ],
      queryParam: { },
      loadData: params => {
        const p = Object.assign(params, this.queryParam)
        return getRooms({ p }).then(res => {
          this.handleList(res.data)
          return {
            ...res,
            pageNumber: params['pageNumber']
          }
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
