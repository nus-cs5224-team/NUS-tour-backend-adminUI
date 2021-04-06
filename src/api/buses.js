import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/buses?name=' + params['name'],
    method: 'get',
    params
  })
}
