import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
const Users = () => import('@/components/users/users.vue')
const Goods = () => import('@/views/goods/Goods.vue')
const AddGoods = () => import('@/views/goods/addGoods.vue')
Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'users',
        name: 'Users',
        component: Users
      }, 
      {
        path: 'goods',
        name: 'Goods',
        component: Goods
      },
      {
        path: 'addgoods',
        name: 'AddGoods',
        component: AddGoods
      }
  ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    register: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router