import { load } from './util'

export const authRoutes = [
  {
    path: '/login',
    component: load('auth/Login'),
    name: 'login',
  },
]
