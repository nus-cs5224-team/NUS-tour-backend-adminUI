import request from '@/utils/request'

export function getPromotions(params) {
  return request({
    url: '/vue-admin-template/promotions',
    method: 'get',
    params
  })
}
