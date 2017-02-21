import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import AdminIndex from '../components/AdminIndex'
import User from '../components/user/user'
import Setting from '../components/setting/Setting'
// import App from '../App'
Vue.use(Router)
// const AdminIndex = { template: '<div>AdminIndex</div>' }
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Login
  },
  {
    path: '/admin_index',
    name: 'admin_index',
    component: AdminIndex,
    children: [{
      path: '/admin_user',
      name: 'admin_user',
      component: User
    },
    {
      path: '/admin_setting',
      component: Setting
    }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !window.sessionStorage.getItem('accessToken')) {
    next({
      path: '/'
    })
  } else {
    next()
  }
})
export default router
