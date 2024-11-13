
const user = {
  Login: '/user/loginPassword',
  Logout: '/user/logout',
  getMs: '/user/sendMs',
  loginCode: '/user/loginCode',
  isLegal: '/user/isLegal',
  UserInfo: '/user/getInfo',
  getUserList: '/user/listByKeyword',
  frozenUser: '/user/frozen'
}
const monitor = {
      weGetBlockList:'/monitor/webase/BlockList',
      weGetTransList:'/monitor/webase/TransList',
      weGetNodeList:'/monitor/webase/NodeList',
      weGetTransDayList:'/monitor/webase/TransDaily',
      weGetGeneral:'/monitor/webase/General',
      weFrontFind:'/monitor/webase/FrontFind',
      weSearch:'/monitor/webase/transInfo'
}

const artwork = {
  getArtworkList: '/sale/manageAdminList',
  getArtworkBrief: '/artwork/brief',
  getArtworkDetail: '/artwork/detail',
  delArtwork: '/artwork/del',
  setArtworkStatus: '/artwork/status',
  lockArtwork: '/artwork/lock',
  getPubExamList: '/artwork/pubExamListByAdmin',
  getUploadExamList: '/artwork/uploadExamList',
  upLink: '/artwork/uplink',
  getPubReportListById: '/artwork/getReportById',
  lockRoom: '/showroom/lock',
  getRooms: '/showRoom/list',
  getRoomWorks: '/showWork/list'
}
const right = {
  changeRight: '/right/changeright',
  setWatermark: '/artwork/addMark',
  getRightList: '/rightProtect/list',
  getRightInfo: '/rightProtect/detail',
  delRightList: '/rightProtect/del'
}
const report = {
  getReportList: '/report/listByAdmin',
  getReportDetail: '/report/getByAdmin',
  setShopReport: '/report/shopUpdate',
  setPubReport: '/report/pubUpdate',
  artworkCompare:'/artwork/compare'
}
const template = {
  getCreateTemplate: '/template/create',
  getEditTemplate: '/template/edit'
}

// 文件上传与下载相关API地址
 const fileApi = {
  FileUpload: '/file/upload',
  FileDownload: '/file/download',
  GetPicture: '/file/image',
  AddVisibleWatermark: '/documentation/addMark'
}
export { user, monitor, artwork, right, report, template, fileApi }
