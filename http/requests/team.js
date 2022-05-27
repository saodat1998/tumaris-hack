import request from '../index'

export function getTeamList() {
  return request({
    url: `/team`,
    method: 'get',
  })
}

export function getManagerList() {
  return request({
    url: `/managers`,
    method: 'get',
  })
}

export function getTeamDetail(id) {
  return request({
    url: `/team/${id}`,
    method: 'get',
  })
}

export function getManagerDetail(id) {
  return request({
    url: `/managers/${id}`,
    method: 'get',
  })
}
