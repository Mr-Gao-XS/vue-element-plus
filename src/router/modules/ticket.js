/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const ticket = {
  path: '/ticket',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ticket',
  meta: {
    title: '门票',
    icon: 'component',
  },
  children: [
    {
      path: 'ticketList',
      component: () => import('@/views/ticket/ticketList'),
      name: 'ticketList',
      meta: { title: '门票管理' },
    },
  ],
}

export default ticket
