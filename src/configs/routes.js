import { lazy } from 'react'

export default {
  Welcome: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Welcome'))
  },
  HomePage: {
    path: '/:name',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Home:{
    path:'/home',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  }
}
