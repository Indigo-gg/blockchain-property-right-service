import { post } from '@/api/baseApi'

/**
 *weGetBlockList
 */
export function weGetBlockList (data) {
  return post('/monitor/webase/BlockList', data)
}

/**
 *weGetTransList
 */
export function weGetTransList (data) {
  return post('/monitor/webase/TransList', data)
}

/**
 *weGetNodeList
 */
export function weGetNodeList (data) {
  return post('/monitor/webase/NodeList', data)
}

/**
 *weGetTransDayList
 */
export function weGetTransDayList (data) {
  return post('/monitor/webase/TransDaily', data)
}

/**
 *weGetGeneral
 */
export function weGetGeneral (data) {
  return post('/monitor/webase/General', data)
}

/**
 *weFrontFind
 */
export function weFrontFind (data) {
  return post('/monitor/webase/FrontFind', data)
}

/**
 * weSearch
 */
export function weSearch (data){
  return post('/monitor/webase/transInfo',data)
}

/**
 *getArtworkList
 */
export function getArtworkList (data) {
  return post('/sale/manageAdminList', data)
}

/**
 *getArtworkList
 */
export function getArtworkBrief (data) {
  return post('/artwork/brief', data)
}

/**
 *getArtworkDetail
 */
export function getArtworkDetail (data) {
  return post('/artwork/detail', data)
}

/**
 *delArtwork
 */
export function delArtwork (data) {
  return post('/artwork/del', data)
}

/**
 *setArtworkStatus
 */
export function setArtworkStatus (data) {
  return post('/artwork/status', data)
}

/**
 *lockArtwork
 */
export function lockArtwork (data) {
  return post('/artwork/lock', data)
}

/**
 *getPubExamList
 */
export function getPubExamList (data) {
  return post('/artwork/pubExamListByAdmin', data)
}

/**
 *getUploadExamList
 */
export function getUploadExamList (data) {
  return post('/artwork/uploadExamList', data)
}

/**
 *upLink
 */
export function upLink (data) {
  return post('/artwork/uplink', data)
}

/**
 *getPubReportListById
 */
export function getPubReportListById (data) {
  return post('/artwork/getReportById', data)
}

/**
 *lockRoom
 */
export function lockRoom (data) {
  return post('/showroom/lock', data)
}

/**
 *getRooms
 */
export function getRooms (data) {
  return post('/showRoom/list', data)
}

/**
 *getRoomWorks
 */
export function getRoomWorks (data) {
  return post('/showWork/list', data)
}

/**
 *Login
 */
export function Login (data) {
  return post('/user/loginPassword', data)
}

/**
 *Logout
 */
export function Logout (data) {
  return post('/user/logout', data)
}

/**
 *getMs
 */
export function getMs (data) {
  return post('/user/sendMs', data)
}

/**
 *loginCode
 */
export function loginCode (data) {
  return post('/user/loginCode', data)
}

/**
 *isLegal
 */
export function isLegal (data) {
  return post('/user/isLegal', data)
}

/**
 *UserInfo
 */
export function UserInfo (data) {
  return post('/user/getInfo', data)
}

/**
 *getUserList
 */
export function getUserList (data) {
  return post('/user/listByKeyword', data)
}

/**
 *frozenUser
 */
export function frozenUser (data) {
  return post('/user/frozen', data)
}

/**
 *changeRight
 */
export function changeRight (data) {
  return post('/right/changeright', data)
}

/**
 *setWatermark
 */
export function setWatermark (data) {
  return post('/artwork/addMark', data)
}

/**
 *getRightList
 */
export function getRightList (data) {
  return post('/rightProtect/listByAdmin', data)
}

/**
 *getRightInfo
 */
export function getRightInfo (data) {
  return post('/rightProtect/detailByAdmin', data)
}

/**
 *delRightList
 */
export function delRightList (data) {
  return post('/rightProtect/del', data)
}

/**
 *getCreateTemplate
 */
export function getCreateTemplate (data) {
  return post('/template/create', data)
}

/**
 *getEditTemplate
 */
export function getEditTemplate (data) {
  return post('/template/edit', data)
}

/**
 *getReportList
 */
export function getReportList (data) {
  return post('/report/listByAdmin', data)
}

/**
 *getReportDetail
 */
export function getReportDetail (data) {
  return post('/report/getByAdmin', data)
}
/**
 *getReportDetail
 */
export function artworkCompare (data) {
  return post('/artwork/compare', data)
}


/**
 *setShopReport
 */
export function setShopReport (data) {
  return post('/report/shopUpdate', data)
}

/**
 *setPubReport
 */
export function setPubReport (data) {
  return post('/report/pubUpdate', data)
}


export function WaterDetect (data) {
  return post('/artwork/extractMark', data)
}

export function SolidityEvidence (data) {
  return post('/rightProtect/eviUpLink', data)
}

export function FailEvidence (data) {
  return post('/rightProtect/eviNodeFail', data)
}

