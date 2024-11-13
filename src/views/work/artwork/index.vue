<template>
  <div class="artwork">
    <div class="table">
      <s-table
        ref="table"
        size="default"
        align="center"
        :rowKey="(record) =>record.id"
        :columns="columns"
        :data="loadData"
        :showPagination="false"
        :scroll="{y:520}"
      >
        <my-drawer slot="action" slot-scope="record">
          <a-button slot="button"><svg-icon icon="notice-2"></svg-icon>详情</a-button>
          {{ record }}
        </my-drawer>
      </s-table>
    </div>
  </div>
</template>

<script>
import '@/utils/generateApiFun'
import { getArtworkList } from '@/api/pageApi'
import STable from '@/components/Table'
import myDrawer from '@/views/components/myDrawer/myDrawer'
export default {
  name: 'Index',
  components: {
    STable, myDrawer
  },
  data () {
    return {
      artworks: '0',
      columns: [
        {
          title: 'ID',
          dataIndex: 'artworkId',
          width: 50,
            customRender: (text) => {
            let obj={
              children:(<a>{{text}}</a>)
            }
            return obj
            }
        },
        {
          title: '名称',
          dataIndex: 'artworkName',
          customRender: (text) => {
            let obj={
              children:(<span style="font-size:16px;">{{text}}</span>)
            }
            return obj
          }
        },
        {
          title: '作者',
          dataIndex: 'author',
          customRender: (text) => {
            let names=[]
            text.forEach(name=>{
              names.push(name.username)
            })
            return names.join('、')
          }
        },


        // {
        //   title: '类型',
        //   dataIndex: 'type',
        //   width: 50
        // },
        {
          span:12,
          title: '哈希值',
          dataIndex: 'hash',
          width: '40%',
          align:'center'
        },
        {
          title: '操作',
          align:'center',
          customRender: () => {
            return {
              children:(<a-button type="primary">详情</a-button>)
            }
          }
        }
      ],
      queryParam: {
        pageSize:50,
        pageNumber: 1
      },
      loadData: params => {
        const p = Object.assign(params, this.queryParam)
        return getArtworkList(this.queryParam).then(res => {
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
  },
  mounted () {

  }
}
</script>

<style scoped>
.table{
  /*padding: 10px;*/
}
.rowClassName{
  text-align: center;
}
</style>
