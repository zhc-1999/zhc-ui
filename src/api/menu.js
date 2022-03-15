import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/zhc-system-service/menu/getMenus',
    method: 'get'
  })
}