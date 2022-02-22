import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsAdmin.vue')
      }
    ]
  },
  {
    path: '/products',
    component: () => import('../views/ProductsShop.vue')
  },
  {
    path: '/product/:productId',
    component: () => import('../views/ProductItem.vue')
  },
  {
    path: '/help',
    component: () => import('../views/Help.vue')
  }
  // {
  //   path: '/shop',
  //   component: () => import('../views/Shop.vue'),
  //   children: [
  //     {
  //       path: 'products',
  //       component: () => import('../views/ProductsShop.vue')
  //     },
  //     {
  //       path: 'product/:productId',
  //       component: () => import('../views/ProductItem.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: document.getElementById(to.hash.replace('#', '')),
        top: 100,
        behavior: 'smooth'
      };
    }
    // always scroll to top
    return { top: 0 }
  }
})

export default router
