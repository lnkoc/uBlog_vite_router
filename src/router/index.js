import { createRouter, createWebHistory } from 'vue-router'
import uBlog from '../views/uBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'uBlog',
      component: uBlog,
      children: [
        {
          path: '/articles/:date',
          name: 'ShowArticle',
          props: true,
          component: () => import('../views/ShowArticle.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/hobby',
      name: 'MyHobby',
      component: () => import('../views/MyHobby.vue')
    },
    {
      path: '/projects',
      name: 'MyProjects',
      component: () => import('../views/MyProjects.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginForm.vue')
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: () => import('../components/blog/DashBoard.vue'),
      children: [
        {
          path: '/dashboard/create',
          name: 'CreateArticle',
          component: () => import('../components/blog/CreateArticle.vue')
        },
        {
          path: '/dashboard/list',
          name: 'ListArticles',
          component: () => import('../components/blog/ListArticles.vue'),
        },
        {
          path: '/dashboard/edit/:id',
          name: 'EditArticle',
          props: true,
          component: () => import('../components/blog/EditArticle.vue')
        }
      ]
    }
  ]
})

export default router
