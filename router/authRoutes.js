import { load } from './util'

export const authRoutes = [
  {
    path: '/login',
    component: load('auth/Login'),
    name: 'login',
  },
  {
    path: '/register',
    component: load('auth/Register'),
    name: 'register',
  },
]
