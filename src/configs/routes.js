import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  HomePage: {
    path: '/:name',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
}
