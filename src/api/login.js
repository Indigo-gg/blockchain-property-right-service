import { post, simplePost } from '@/api/baseApi'
import { user } from '@/api/config'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (data) {
  return post(user.Login, data)
}

export function getInfo () {
  return simplePost(user.UserInfo)
}

export function logout () {
  return simplePost(user.Logout)
}
