import request from '../index'

export function getCertificationList() {
  return request({
    url: '/certification',
    method: 'get',
  })
}

export function getCertificationDetail(id) {
  return request({
    url: `/certification/${id}`,
    method: 'get',
  })
}
