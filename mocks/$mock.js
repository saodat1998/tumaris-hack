/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './team'
import mock1 from './slider'
import mock2 from './services'
import mock3 from './partners'
import mock4 from './pages/_id'
import mock5 from './managers/index'
import mock6 from './managers/_id'
import mock7 from './courses/index'
import mock8 from './courses/category/index'
import mock9 from './courses/category/_id'
import mock10 from './courses/_id'
import mock11 from './certification/index'
import mock12 from './articles/index'
import mock13 from './articles/_id'
import mock14 from './about'

export default (client) => mockServer([
  {
    path: '/team',
    methods: mock0
  },
  {
    path: '/slider',
    methods: mock1
  },
  {
    path: '/services',
    methods: mock2
  },
  {
    path: '/partners',
    methods: mock3
  },
  {
    path: '/pages/_id',
    methods: mock4
  },
  {
    path: '/managers',
    methods: mock5
  },
  {
    path: '/managers/_id',
    methods: mock6
  },
  {
    path: '/courses',
    methods: mock7
  },
  {
    path: '/courses/category',
    methods: mock8
  },
  {
    path: '/courses/category/_id',
    methods: mock9
  },
  {
    path: '/courses/_id',
    methods: mock10
  },
  {
    path: '/certification',
    methods: mock11
  },
  {
    path: '/articles',
    methods: mock12
  },
  {
    path: '/articles/_id',
    methods: mock13
  },
  {
    path: '/about',
    methods: mock14
  }
], client, '')
