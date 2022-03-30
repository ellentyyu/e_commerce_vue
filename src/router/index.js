import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/frontend/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/frontend/About.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/frontend/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/backend/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/backend/ProductsAdmin.vue')
      },
      {
        path: 'coupons',
        component: () => import('@/views/backend/CouponsAdmin.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/backend/OrdersAdmin.vue')
      }
    ]
  },
  {
    path: '/products',
    component: () => import('@/views/frontend/ProductsShop.vue')
  },
  {
    path: '/product/:productId',
    component: () => import('@/views/frontend/ProductItem.vue')
  },
  {
    path: '/help',
    component: () => import('@/views/frontend/Help.vue')
  },
  {
    path: '/order',
    component: () => import('@/views/frontend/Order.vue')
  },
  {
    path: '/checkout/:orderId',
    component: () => import('@/views/frontend/Checkout.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/frontend/NotFound.vue')
  }
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
      }
    }
    // always scroll to top
    return { top: 0 }
  }
})

export default router
