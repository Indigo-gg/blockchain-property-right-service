import request from '@/utils/request'
/**
 * 发送post请求
 * @param url
 * @param data
 * @returns {AxiosPromise}
 */
export function post (url, data) {
  return request({
    url: url,
    method: 'post',
    data
  })
}
export function simplePost (url) {
  return request({
    url: url,
    method: 'post'
  })
}

/**
 * get方法获取文件内容
 * @param url
 * @returns {AxiosPromise}
 */
export function getFile (url) {
  return request({
    url: url,
    method: 'get',
    responseType: 'arraybuffer'
  })
}

/**
 * 请求数据列表的函数
 * @param baseUrl 基础URL
 * @param data  请求参数
 * @returns {AxiosPromise}
 */
export function baseList (baseUrl, data) {
  return post(baseUrl + '/list', data)
}

/**
 * 增添数据的函数
 * @param baseUrl
 * @param data
 * @returns {AxiosPromise}
 */
export function baseAdd (baseUrl, data) {
  return post(baseUrl + '/add', data)
}

/**
 * 编辑更新的函数
 * @param baseUrl
 * @param data
 * @returns {AxiosPromise}
 */
export function baseEdit (baseUrl, data) {
  return post(baseUrl + '/edit', data)
}

/**
 * 基本删除接口
 * @param baseUrl
 * @param ids
 * @returns {AxiosPromise}
 */
export function baseDel (baseUrl, ids) {
  return post(baseUrl + 'del', { ids: ids })
}

/**
 * 详情接口
 * @param baseUrl
 * @param data
 * @returns {AxiosPromise}
 */
export function baseDetail (baseUrl, data) {
  return post(baseUrl + 'detail', data)
}
