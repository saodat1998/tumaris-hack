import request from '../index'

export function getCoursesList() {
  return request({
    url: '/courses',
    method: 'get',
  })
}

export function getCourseDetail(id) {
  return request({
    url: `/courses/${id}`,
    method: 'get',
  })
}

export function getCourseListCategory(id) {
  return request({
    url: `/courses/category/${id}`,
    method: 'get',
  })
}

export function getListCategory() {
  return request({
    url: `/courses/category`,
    method: 'get',
  })
}
