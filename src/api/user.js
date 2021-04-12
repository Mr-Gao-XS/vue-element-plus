import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/app/mock/281257/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/app/mock/281257/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/app/mock/281257/logout',
    method: 'post'
  })
}
