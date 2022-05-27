import request from '../index'

export function getList() {
  return request({
    url: '/services',
    method: 'get',
  })
}

export function getDetail() {
  return request({
    url: `/about`,
    method: 'get',
  })
}
