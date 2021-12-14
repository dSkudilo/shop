import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const routes = [
  {
    path:'/',
    name:'home',
    component:() => import("../views/Home.vue"),
    meta:{layout:'main',auth:false} 
  },
  {
    path:'/products',
    name:'products',
    component:() => import("../views/Products.vue"),
    meta:{layout:'main',auth:false} 
  },
  {
    path:'/product/:id',
    name:'product',
    component:() => import("../views/Product.vue"),
    meta:{layout:'main',auth:false} 
  },
  {
    path:'/about',
    name:'about',
    component:() => import("../views/Product.vue"),
    meta:{layout:'main',auth:false} 
  },
  {
    path:'/auth',
    name:'auth',
    component:() => import("../views/Authorization.vue"),
    meta:{layout:'main',auth:false} 
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  const requireAdmin = to.meta.admin

  if (requireAdmin) {
    if (store.getters['auth/isAdmin']) {
      return next()
    } else {
      return next('/auth?message=admin')
    }
  }

  if (requireAuth) {
    if (store.getters['auth/isAuthenticated']) {
      return next()
    } else {
      return next('/auth?message=auth')
    }
  }

  next()
})

export default router
