import { load } from './util'

export const profileRouter = [
  {
    path: '/profile',
    component: load('profile/index'),
    name: 'profile',
  },
  {
    path: '/balance',
    component: load('profile/balance'),
    name: 'balance',
  },
  {
    path: '/profile/courses',
    component: load('profile/courses'),
    name: 'profile_courses',
  },
]
