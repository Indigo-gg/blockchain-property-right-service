import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
// import { BasicLayout, RouteView } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'
// import { listMyRouters } from '@/api/menu'

export const loadView = (view) => {
  // 路由懒加载
  return (resolve) => require([`@/views/${view}`], resolve)
}

/** function filterAsyncRouter (routes) {
  return routes.filter(route => {
    if (!route.path) {
      console.log('不包含path的router信息', route)
    }
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'RouteView') {
        route.component = RouteView
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}
*/
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      console.log('state.routers', state.routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        // const routes = [{
        //   path: '/',
        //   name: 'index',
        //   component: BasicLayout,
        //   meta: { title: '主页' },
        //   redirect: '/dashboard/analysis',
        //   children: [
        //     // dashboard
        //     {
        //       path: '/dashboard',
        //       name: 'dashboard',
        //       redirect: '/dashboard/analysis',
        //       component: RouteView,
        //       meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse },
        //       children: [
        //         {
        //           path: '/dashboard/analysis',
        //           name: 'Analysis',
        //           component: () => import('@/views/dashboard/Analysis'),
        //           meta: { title: '分析页', keepAlive: false }
        //         },
        //         {
        //           path: '/monitor/login-info',
        //           name: 'loginInfo',
        //           component: () => import('@/views/monitor/login-info'),
        //           meta: { title: '监控页', keepAlive: false }
        //         },
        //         {
        //           path: '/user/department',
        //           name: 'Department',
        //           component: () => import('@/views/user/department'),
        //           meta: { title: '部门页', keepAlive: false }
        //         }
        //       ]
        //     },
        //     {
        //       path: 'userInfo',
        //       name: 'UserInfo',
        //       component: () => import('@/views/uerInfo'),
        //       meta: {
        //         title: '用户中心'
        //       }
        //     },
        //     {
        //       name: 'tableShow',
        //       path: 'TestShow',
        //       component: () => import('@/views/user/testShow/testShow'),
        //       meta: { title: '测试页面' }
        //     }
        //     ]
        // }]
        // listMyRouters().then(response => {
        //   const accessedRoutes = filterAsyncRouter(response.data)
        //   for (const item of accessedRoutes) {
        //     routes[0].children.push(item)
        //   }
        //   routes.push({ path: '*', redirect: '/404', hidden: true })
        //   commit('SET_ROUTERS', routes)
        //   resolve(accessedRoutes)
        // })
        const accessedRouters = asyncRouterMap
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
