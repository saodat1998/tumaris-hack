import request from '../index'

export function getSliderList() {
  return request({
    url: '/slider',
    method: 'get',
  })
}
