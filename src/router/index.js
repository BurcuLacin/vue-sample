import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Explore from '../views/explore/index.vue'
import Direct from '../views/direct/index.vue'

Vue.use(VueRouter)

const routes = [

  //ana sayfa master-page,

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/direct',
    name: 'Direct',
    component: Direct
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/profile'),
      //profile master-page
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () =>
          import(
            /* webpackChunkName: "ProfilePost" */ '../views/profile/post'
          )
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(
            /* webpackChunkName: "ProfilePost" */ '../views/profile/igtv'
          )
      },
      {
        path: 'save',
        name: 'ProfileSave',
        component: () =>
          import(
            /* webpackChunkName: "ProfilePost" */ '../views/profile/save'
          )
      },
      {
        path: 'tag',
        name: 'ProfileTag',
        component: () =>
          import(
            /* webpackChunkName: "ProfilePost" */ '../views/profile/tag'
          )
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
