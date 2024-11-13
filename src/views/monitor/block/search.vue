<template>
  <div>
    <a-card :bordered="false">
      <a-form-model
        ref="searchForm"
        layout="inline"
        @submit.native.prevent
        :label-col="{span:2}"
        :wrapper-col="{ span: 22 }"
      >
        <a-form-model-item label="哈希值" style="width:600px">
          <a-input placeholder="请输入哈希值" v-model="hash"></a-input>
        </a-form-model-item>
        <a-form-model-item :label-width="0" style="width: 180px" :wrapper-col="{ span: 24 }">
          <a-button type="primary" icon="search" @click="getTxInfoByTxHash">搜索</a-button>
          <a-button icon="redo" class="ml-5" @click="reset">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
    <a-card :bordered="false" class="mt-10" v-if="item !== undefined">
      <div class="card" style="border-radius:0;width:100%;padding: 20px 25px">
        <a-tooltip title="字段含义" style="float:right;margin-top:-15px;margin-right:-15px">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" class="pointer" theme="filled" @click="showModal"/>
        </a-tooltip>
        <a-modal v-model="visible" okText="确定" cancelText="取消" title="字段含义" @ok="handleOk" width="700px">
          <a-table :columns="columns" :data-source="data" bordered :pagination="false">
            <template slot="name" slot-scope="text">
              <a>{{ text }}</a>
            </template>
          </a-table>
        </a-modal>
        <div style="float:left;width:49.8%">
          <a-row>
            <a-col span="5">
              <strong>hash:</strong>
            </a-col>
            <a-col class="text-overflow-1" span="18">
              {{ item.hash }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>blockHash:</strong>
            </a-col>
            <a-col class="text-overflow-1" span="18">
              {{ item.blockHash }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>blockLimit:</strong>
            </a-col>
            <a-col span="19">
              {{ item.blockLimit }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>blockNumber:</strong>
            </a-col>
            <a-col span="19">
              {{ item.blockNumber }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>chainId:</strong>
            </a-col>
            <a-col span="19">
              {{ item.chainId }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>extraData:</strong>
            </a-col>
            <a-col span="19">
              {{ item.extraData }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>from:</strong>
            </a-col>
            <a-col span="19">
              {{ item.from }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>to:</strong>
            </a-col>
            <a-col span="19">
              {{ item.to }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>gas:</strong>
            </a-col>
            <a-col span="19">
              {{ item.gas }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>gasPrice:</strong>
            </a-col>
            <a-col span="19">
              {{ item.gasPrice }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>groupId:</strong>
            </a-col>
            <a-col span="19">
              {{ item.groupId }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>nonce:</strong>
            </a-col>
            <a-col  class="text-overflow-1" span="19">
              {{ item.nonce }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>value:</strong>
            </a-col>
            <a-col span="19">
              {{ item.value }}
            </a-col>
          </a-row>
          <a-row>
            <a-col span="5">
              <strong>transactionIndex:</strong>
            </a-col>
            <a-col span="10">
              {{ item.transactionIndex }}
            </a-col>
          </a-row>
        </div>
        <!--        <a-divider type="vertical" style="padding:0;float:left;height:315px;margin:0 20px"/>-->
        <div style="float:left;width:49.8%">
          <a-row>
            <a-col span="3">
              <strong>input:</strong>
            </a-col>
            <a-col span="21" class="text-wrapper">
              <div style="height: 1em" class="text-overflow-1">
                {{ item.input }}

              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-col span="4">
              <strong>signature:</strong>
            </a-col>
            <a-col span="20" class="text-wrapper">
              <div style="width:100%;border:1.4px solid rgba(144,144,144,0.6);padding:10px 20px;margin-top:10px">
                <a-row>
                  <a-col span="4">
                    <strong>signature:</strong>
                  </a-col>
                  <a-col span="20">
                    {{ item.signature.signature }}
                  </a-col>
                </a-row>
                <a-row>
                  <a-col span="4">
                    <strong>r:</strong>
                  </a-col>
                  <a-col span="20">
                    {{ item.signature.r }}
                  </a-col>
                </a-row>
                <a-row>
                  <a-col span="4">
                    <strong>s:</strong>
                  </a-col>
                  <a-col span="20">
                    {{ item.signature.s }}
                  </a-col>
                </a-row>
                <a-row>
                  <a-col span="4">
                    <strong>v:</strong>
                  </a-col>
                  <a-col span="20">
                    {{ item.signature.v }}
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </div>
        <div style="height:0;width:100%;clear:both"></div>
      </div>
    </a-card>
    <a-card :bordered="false" class="mt-10">
      <s-table
        ref="table"
        rowKey="blockNumber"
        :columns="table.columns"
        :data="table.loadData"
        :alert="false"
        showPagination="auto"
      >
        <template slot="transHash" slot-scope="text,record">
          <!--          {{ record.id }}{{ flag[record.id] }}{{ flag[70] }}-->
          <a-tooltip v-show="selectCopy!==record.blockNumber">
            <template slot="title">
              复制
            </template>
            <a-icon type="copy" class="ml-10" style="color:#71DBD3;cursor:pointer" @click="copy(record.blockNumber, record.transHash)"/>
          </a-tooltip>
          <a-tooltip v-show="selectCopy===record.blockNumber">
            <template slot="title">
              复制成功
            </template>
            <a-icon type="check" class="ml-10" style="color:#71DBD3;cursor:pointer" @click="copy(record.blockNumber, record.transHash)"/>
          </a-tooltip>
          <span class="normal ml-5" ref="p">
            {{ record.transHash }}
          </span>
        </template>
      </s-table>
    </a-card>
  </div>
</template>

<script>
import { STable } from '@/components'
import { weSearch, weGetTransList } from '@/api/pageApi'
const columns = [
  {
    title: '字段',
    dataIndex: 'data'
  },
  {
    title: '解释',
    dataIndex: 'express'
  }
]

const data = [
  {
    key: '1',
    id: '1',
    data: 'hash',
    express: '当前交易hash值'
  },
  {
    key: '2',
    id: '2',
    data: 'blockHash',
    express: '当前交易所在的区块的hash值'
  },
  {
    key: '3',
    id: '3',
    data: 'blockNumber',
    express: '当前交易所在的区块号'
  },
  {
    key: '4',
    id: '4',
    data: 'from',
    express: '发起交易的账户'
  },
  {
    key: '5',
    id: '5',
    data: 'to',
    express: '交易接受者地址'
  },
  {
    key: '6',
    id: '6',
    data: 'gas',
    express: '执行此交易需要的gas'
  },
  {
    key: '7',
    id: '7',
    data: 'gasPrice',
    express: '当前gas 汇率'
  },
  {
    key: '8',
    id: '8',
    data: 'nonce',
    express: '交易下的nonce值，是账户发起交易所维护的nonce'
  },
  {
    key: '9',
    id: '9',
    data: 'value',
    express: '交易的以太币数量'
  },
  {
    key: '10',
    id: '10',
    data: 'transactionIndex',
    express: '交易序号'
  },
  {
    key: '11',
    id: '11',
    data: 'input',
    express: '部署智能合约交易的16进制代码'
  },
  {
    key: '12',
    id: '12',
    data: 'r,s,v',
    express: '交易签名和用去决定交易的发送者的对应值'
  }
]
export default {
  name: 'search',
  components: {
    STable
  },
  data () {
    return {
      data,
      columns,
      visible: false,
      flag: [],
      item: undefined,
      hash: '',
      selectCopy:-1,
      table: {
        hasData: false,
        columns: [
          {
            width: 60,
            align: 'center',
            dataIndex: 'blockNumber',
            title: '块高',
            key: 'blockNumber',
            // fixed: 'left'
          },
          {
            width: 80,
          align: 'center',
          dataIndex: 'createTime',
          title: '创建时间',
            ellipsis:true,
            key: 'createTime'
        },
          {
            width: 200,
            align: 'center',
            dataIndex: 'transTo',
            title: '转入地址',
            key: 'transTo',
            ellipsis:true,
            scopedSlots: { customRender: 'transTo' }
          },
          {
          width: 200,
          align: 'center',
          dataIndex: 'transFrom',
          title: '转出地址',
          key: 'transFrom',
          ellipsis:true,
          scopedSlots: { customRender: 'transFrom' }
        },{
            width: 200,
            align: 'center',
            dataIndex: 'transHash',
            title: '交易哈希',
            key: 'transHash',
            ellipsis:true,

            scopedSlots: { customRender: 'transHash' },
            // fixed: 'right'
          }
        ],
        loadData: parameter => {
          const pageData = {
            pageSize: parameter.pageSize,
            pageNumber: parameter.pageNumber
          }
          const requestParameters = Object.assign({}, pageData)
          return weGetTransList(requestParameters).then(res => {
            console.log('weGetTransit', res)
            // res.data['pageNo'] = parameter['pageNo']
            // // console.log('pageNo', res.data)
            const temp = {
              data:res.data[0],
              total:res.total,
              pageNumber:parameter['pageNumber']
            }
            // for (let i = 0; i <= res.data[0].length; i++) {
            //   this.flag[i] = true
            // }
            return temp
          })
        }
      }
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      // console.log(e)
      this.visible = false
    },
    copy (i, text) {
      this.copyText = text
      var input = document.createElement('input') // 直接构建input
      input.value = this.copyText // 设置内容
      // console.log(input.value)

      document.body.appendChild(input) // 添加临时实例
      input.select() // 选择实例内容
      document.execCommand('Copy') // 执行复制
      document.body.removeChild(input) // 删除临时实例
      // console.log('flag1', this.flag)
      // for (let j = 0; j < this.flag.length; j++) {
      //   if (i === j) {
      //     this.flag[j] = false
      //   } else {
      //     this.flag[j] = true
      //   }
      // }
      this.selectCopy=i
      // Vue.set(this.flag, i, false)
      // this.$forceUpdate()
      // this.flag[i] = false
      // // console.log('flagi', this.flag[i])
      // console.log('flag2', this.flag)
      setTimeout(() => {
        // Vue.set(this.flag, i, true)
        this.selectCopy=-1
      }, 3000)
      // console.log('flag3', this.flag)
    },
    reset () {
      this.hash = ''
      this.item = undefined
    },
    getTxInfoByTxHash () {
      weSearch({transHash:this.hash}).then(res => {
        // console.log('getTxInfoByTxHash', res)
        if (res.ok) {
          this.item = res.data
          // console.log('this.item', this.item)
          this.$message.success('查找成功')
        } else {
          this.$message.error('查找失败')
        }
      })
    }
  }
}
</script>

<style scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
.text-wrapper {
  word-break: break-all;
  word-wrap: break-word
}
</style>
