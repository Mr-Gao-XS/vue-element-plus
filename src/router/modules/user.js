/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const user = {
  path: '/user',
  component: Layout,
  redirect: 'noRedirect',
  name: 'user',
  meta: {
    title: '权限管理',
    icon: 'component',
  },
  children: [
    {
      path: 'role',
      component: () => import('@/views/user/role'),
      name: 'role',
      meta: { title: '角色管理' },
    },

    {
      path: 'account',
      component: () => import('@/views/user/account'),
      name: 'account',
      meta: { title: '账号管理' },
    },
  ],
}

export default user
