import request from '../index'

export function getPageList() {
  return request({
    url: '/newspaper/index?type=PAGE',
    method: 'get',
  })
}

export function getPageDetail(id) {
  return request({
    url: `/pages/${id}`,
    method: 'get',
  })
}
