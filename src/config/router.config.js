// eslint-disable-next-line
import { BasicLayout } from '@/layouts'
import { artworkIcon, rightIcon, dealIcon, monitor, financial, setting } from '@/core/icons'
import RouteView from '@/layouts/RouteView'
import BlankLayout from '@/layouts/BlankLayout'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/work/upExamine',
    children: [
      // {
      //   path: '/blank',
      //   name: 'blank',
      // },
      // dashboard
      {
        path: '/work',
        name: 'work',
        redirect: '/work/artwork',
        component: RouteView,
        meta: { title: '艺术品管理中心', keepAlive: false, icon: artworkIcon, permission: ['work'] },
        children: [
          {
            path: '/work/artwork',
            name: 'Artwork',
            component: () => import('@/views/work/artwork/index'),
            meta: { title: '藏品管理', keepAlive: false, permission: ['work'] }
          },
          // {
          //   path: '/work/showRoom',
          //   name: 'showRoom',
          //   component: () => import('@/views/work/show-room/index'),
          //   meta: { title: '展厅管理', keepAlive: false, permission: ['work'] }
          // },
          {
            path: '/work/upExamine',
            name: 'upExamine',
            component: () => import('@/views/work/upExamine/index'),
            meta: { hidden: true, title: '藏品上传审核', keepAlive: false, permission: ['work'] }
          },
          {
            path: '/work/pubDetail/:pubWork',
            name: 'pubDetail',
            hidden: true,
            component: () => import('@/views/work/pubExamine/pubDetail'),
            meta: { hidden: true, title: '公示作品详情', keepAlive: false, permission: ['work'] }

          },
          {
            path: '/work/pubExamine',
            name: 'pubExamine',
            component: () => import('@/views/work/pubExamine/index'),
            meta: { title: '公示作品审核', keepAlive: false, permission: ['work'] }
          }
        ]
      },
      {
        path: '/right',
        name: 'right',
        redirect: '/right/rightManager',
        component: RouteView,
        meta: { title: '权益保护中心', keepAlive: false, icon: rightIcon, permission: ['right'] },
        children: [
          {
            path: '/right/manage',
            name: 'Manage',
            component: () => import('@/views/right/manage/index'),
            meta: { title: '维权事件管理', keepAlive: false, permission: ['right'] }
          },
          {
            path: '/right/detail/:safeRecordId',
            name: 'rightDetail',
            hidden: true,
            component: () => import('@/views/right/manage/detail'),
            meta: { title: '维权事件详情', keepAlive: false, permission: ['right'] }
          }
          // {
          //   path: '/right/setting',
          //   name: 'Setting',
          //   component: () => import('@/views/right/setting/index'),
          //   meta: { title: '版权保护设置', keepAlive: false, permission: ['right'] }
          // }
        ]
      },
      {
        path: '/examine',
        name: 'examine',
        redirect: '/examine/report',
        component: RouteView,
        meta: { title: '举报管理', keepAlive: false, icon: dealIcon, permission: ['examine'] },
        children: [
          {
            path: '/report/reportList',
            name: 'reportList',
            component: () => import('@/views/examine/report'),
            meta: { title: '举报审核', keepAlive: false, permission: ['examine'] }
          },
          {
            path: '/report/reportDetail/:reportId',
            name: 'reportDetail',
            hidden: true,
            component: () => import('@/views/examine/reportDetail'),
            meta: { title: '审核详情', keepAlive: false, permission: ['examine'] }

          }
          // {
          //   path: '/report/reportShopList',
          //   name: 'reportShopList',
          //   component: () => import('@/views/examine/shopReport'),
          //   meta: { title: '商城举报审核', keepAlive: false, permission: ['examine'] }
          // },
          // {
          //   path: '/report/reportShopDetail/:reportId',
          //   name: 'reportShopDetail',
          //   hidden: true,
          //   component: () => import('@/views/examine/shopReportDetail'),
          //   meta: { title: '商城审核详情', keepAlive: false, permission: ['examine'] }
          //
          // }
        ]
      },
      // {
      //   path: '/deal',
      //   name: 'deal',
      //   redirect: '/deal/manage',
      //   component: RouteView,
      //   meta: { title: '交易中心', keepAlive: true, icon: dealIcon, permission: ['right'] },
      //   children: [
      //     {
      //       path: '/deal/dataManager',
      //       name: 'dataManager',
      //       component: () => import('@/views/deal/data-manager/index'),
      //       meta: { title: '交易数据中心', keepAlive: false, permission: ['right'] }
      //     }
      //   ]
      // },
      {
        path: '/monitor',
        name: 'monitor',
        redirect: '/monitor/right',
        component: RouteView,
        meta: { title: '区块链监控', keepAlive: false, icon: monitor, permission: ['monitor'] },
        children: [
          // {
          //   path: '/monitor/user',
          //   name: 'rightManager',
          //   component: () => import('@/views/monitor/user/index'),
          //   meta: { title: '用户流量监控台', keepAlive: false, permission: ['monitor'] }
          // },
          // {
          //   path: '/monitor/right',
          //   name: 'rightMonitor',
          //   component: () => import('@/views/monitor/right/index'),
          //   meta: { title: '权益保护监控台', keepAlive: false, permission: ['monitor'] }
          // },
          // {
          //   path: '/monitor/deal',
          //   name: 'dealMonitor',
          //   component: () => import('@/views/monitor/deal/index'),
          //   meta: { title: '交易数据监控台', keepAlive: false, permission: ['monitor'] }
          // },
          {
            path: '/monitor/block',
            name: 'blockMonitor',
            component: () => import('@/views/monitor/block/index'),
            meta: { title: '区块链监控平台', keepAlive: false, permission: ['monitor'] }
          },
          {
            path: '/monitor/search',
            name: 'blockSearch',
            component: () => import('@/views/monitor/block/search'),
            meta: { title: '区块链交易查询', keepAlive: false, permission: ['monitor'] }
          }
        ]
      },
      // {
      //   path: '/finance',
      //   name: 'Finance',
      //   component: RouteView,
      //   redirect: '/finance/center',
      //   meta: { title: '财务中心', icon: financial },
      //   children: [
      //     {
      //       path: '/finance/center',
      //       name: 'financeCenter',
      //       component: () => import('@/views/finance/index'),
      //       meta: { title: '财务管理' }
      //     }]
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: RouteView,
      //   meta: { title: '用户中心', icon: 'user' },
      //   children: [
      //     {
      //       path: '/user/manage',
      //       name: 'userManage',
      //       meta: { title: '用户管理' },
      //       component: () => import('@/views/user/manage/index')
      //     }
      //   ]
      // },
      {
        path: '/sys',
        name: 'Sys',
        component: RouteView,
        redirect: 'noRedirect',
        meta: {
          title: '系统设置',
          icon: setting
        },
        children: [{
          path: 'role',
          name: 'Role',
          component: () => import('@/views/sys/role'),
          meta: {
            title: '角色管理'
          }
        }, {
          path: 'menus',
          name: 'Menus',
          component: () => import('@/views/sys/menus'),
          meta: {
            title: '菜单管理'
          }
        }, {
          path: 'config',
          name: 'Config',
          component: () => import('@/views/sys/config'),
          meta: {
            title: '系统配置'
          }
        }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: BlankLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/user/Login2')
        // component: () => import('@/views/register')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },
  {
    path: '/template',
    component: RouteView,
    hidden: true,
    children: [
      {
        path: 'login2',
        name: 'Login2',
        component: () => import('@/views/user/Login2')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
export const defaultLocation = constantRouterMap[0].redirect
