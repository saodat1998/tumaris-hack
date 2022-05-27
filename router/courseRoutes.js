import { load } from './util'

export const courseRoutes = [
  {
    path: '/',
    component: load('index'),
    name: 'home',
  },
  {
    path: '/page/1',
    component: load('About'),
    name: 'about',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'About' }],
    },
  },
  {
    path: '/page/:id',
    component: load('PageDetail'),
    name: 'page_detail',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'About' }],
    },
  },
  {
    path: '/experience',
    component: load('Experience'),
    name: 'page_detail',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'About' }],
    },
  },
  {
    path: '/service/:id',
    component: load('ServiceDetail'),
    name: 'service_detail',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'Services' }],
    },
  },
  {
    path: '/contacts',
    component: load('Contacts'),
    name: 'contacts',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'Contacts' }],
    },
  },
  {
    path: '/last-courses',
    component: load('Courses'),
    name: 'last-courses',
    meta: {
      breadcrumb: [
        { text: 'Home', name: 'home' },
        { text: 'Courses', name: 'trainings' },
        { text: 'Latest' },
      ],
    },
  },
  {
    path: '/services',
    component: load('Services'),
    name: 'services',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'Services' }],
    },
  },
  {
    path: '/article/:id',
    component: load('ArticleDetail'),
    name: 'article_detail',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'About' }],
    },
  },
  {
    path: '/courses',
    component: load('Courses'),
    name: 'courses',
    meta: {
      breadcrumb: [
        { text: 'Home', name: 'home' },
        { text: 'Courses', name: 'trainings' },
        { text: 'Latest' },
      ],
    },
  },
  {
    path: '/courses-category/:id',
    component: load('NewCourses'),
    name: 'courses',
    meta: {
      breadcrumb: [
        { text: 'Home', name: 'home' },
        { text: 'Courses', name: 'trainings' },
        { text: 'Latest' },
      ],
    },
  },
  {
    path: '/articles',
    component: load('Articles'),
    name: 'articles',
    meta: {
      breadcrumb: [
        { text: 'Home', name: 'home' },
        { text: 'Courses', name: 'trainings' },
        { text: 'News' },
      ],
    },
  },
  {
    path: '/courses/:id',
    component: load('DetailCourse'),
    name: 'detail_course',
    meta: {
      breadcrumb: [
        { text: 'Home', name: 'home' },
        { text: 'Courses', name: 'trainings' },
        { text: 'Course' },
      ],
    },
  },
  {
    path: '/members',
    component: load('Members'),
    name: 'members',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'Trainers' }],
    },
  },
  {
    path: '/team',
    component: load('Team'),
    name: 'team',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'Team' }],
    },
  },
  {
    path: '/members/:id',
    component: load('SingleMember'),
    name: 'singleMember',
    meta: {
      breadcrumb: [{ text: 'Home', name: 'home' }, { text: 'Trainers' }],
    },
  },
  {
    path: '*',
    component: load('NotFound'),
    name: 'not_found',
    notChangePath: true,
    meta: {
      title: 'Not found',
    },
  },
]
