import request from '../index'

export function getList() {
  return request({
    url: '/partners',
    method: 'get',
  })
}
