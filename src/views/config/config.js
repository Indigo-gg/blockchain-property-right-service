const indexConfig = {
  sorts: {
    hot: {
      title: '使用权热卖',
      titleEng: 'Usufruct Hot',
      color: '#e19bef'

    },
    latest: {
      title: '所有权热卖',
      titleEng: 'Ownership Hot',
      color: '#f5afa5'
    },
    publicize: {
      title: '艺术品公示区',
      titleEng: 'Publicity area',
      color: '#66f1d2',
      pubTip: '更多公示',
      refreshTime: 5000
    },
    recommend: {
      title: '精选艺术品'
    }
  }
}
const pageConfig = {
  //手机号： 13711134895
  loadingTime: 500,
  pubFreshTime: 2500,
  // markedfileDefault:'',
  // 展馆最大数量
  workSum: 20,

  getTag: (type) => {
    const tagColors = ['cyan', 'orange', 'blue', 'red', 'purple', 'green', 'green', 'green']
    const tagText = ['审核中', '已退回', '公示中', '举报处理中', '已上链', '使用权在售', '所有权在售', '发售中']
    return {
      color: tagColors[type - 1],
      text: tagText[type - 1]
    }
  },
  // 更新页数
  updateArtParams: (artworkParams, total) => {
    if (artworkParams.pageSize * artworkParams.pageNumber < total) {
      artworkParams.pageNumber++
    }
  },
  rightStatus: {
    myCreate: 0,
    myBuyOwn: 1,
    myBuyUse: 2
  },
  Torte:{
    isPass:3,
    isDeal:2,
    unDeal:1
},
  nodeStatus:{
    undeal:1,
    pass:2,
    notPass:3
  },
  status: {
    // 1-待审核 2-退回 3-审核通过(进入公示)
    examine: 1,
    rejected: 2,
    publicize: 3,
    // 4-公示被举报再次审核(公示举报受理中)
    report: 4,
    // 5-公示成功上链
    onChain: 5,
    // 6-发布售卖
    onSale: 6,
    // 7-售卖被举报打入黑洞
    intoHall: 7
  },
  // TODO 标签颜色待更改
  renderArtworkTag: (tag) => {
    const color = 'rgba(179,189,232,0.76)'
    const text = ['全部', '机械', '建筑', '动物', '花草树木', '人物', '气象', '风景', '宇宙', '赛博朋克', '水墨画', '星空', '二次元']
    return { color: color, text: text[tag] }
  },
  artworkTags: [{ text: '机械', value: 1 }, { text: '建筑', value: 2 }, { text: '动物', value: 3 }, { text: '花草树木', value: 4 }, { text: '人物', value: 5 }, { text: '气象', value: 6 }, { text: '风景', value: 7 }, { text: '宇宙', value: 8 }, { text: '赛博朋克', value: 9 }, { text: '水星', value: 10 }, { text: '星空', value: 11 }, { text: '二次元', value: 12 }],
  artworkTagIcon: []
}
const indexs = ['-1', '0', '1', '2', '3']
const cerColor = ['cyan', 'orange', 'blue', 'red', 'purple']

const types = ['所有证书', '著作权证书', '使用权证书', '所有权证书', '证据证书']
const typeName = ['create', 'use', 'own', 'evi']

export function getCerTypeById(id) {
  for (let i = 0; i < indexs.length; i++) {
    if (indexs[i] === id) {
      return {
        color: cerColor[i],
        name: types[i]
      }
    }
  }
}

const traceNodeConfig = {
  status: ['作品上链', '发售使用权', '发售所有权', '使用权库存增发', '所有权份额增发', '调整使用权价格', '调整所有权价格', '使用权交易', '所有权交易', '作品冻结'],
  renderTag: (i) => {
    const key = parseInt(i)
    const tagColor = ['cyan', 'blue', 'blue', 'orange', 'orange', 'orange', 'orange', 'purple', 'pink', 'red']
    return {
      text: traceNodeConfig.status[key - 1],
      color: tagColor[key - 1]
    }
  }
}


export { indexConfig, pageConfig, traceNodeConfig }
