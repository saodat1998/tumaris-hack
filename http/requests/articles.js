import request from '../index'

export function getList() {
  return request({
    url: '/articles',
    method: 'get',
  })
}

export function getDetail(id) {
  return request({
    url: `/articles/${id}`,
    method: 'get',
  })
}
