import request from '@/utils/request'

export function getUsers(params) {
  return request({
    url: '/vue-admin-template/users',
    method: 'get',
    params
  })
}
