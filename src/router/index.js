import { createRouter, createWebHistory } from 'vue-router'
import uBlog from '@/pages/uBlog.vue'

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
          component: () => import('@/pages/ShowArticle.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: () => import('@/pages/AboutMe.vue')
    },
    {
      path: '/hobby',
      name: 'MyHobby',
      component: () => import('@/pages/MyHobby.vue')
    },
    {
      path: '/projects',
      name: 'MyProjects',
      component: () => import('@/pages/MyProjects.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/pages/Contact.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/LoginForm.vue')
    },
    {
      path: '/admin/dashboard',
      name: 'Summary',
      props: true,
      component: () => import('@/components/dashboard/blog/Summary.vue'),
    },
    {
      path: '/admin/create',
      name: 'CreateArticle',
      props: true,
      component: () => import('@/components/dashboard/blog/CreateArticle.vue')
    },
    {
      path: '/admin/list',
      name: 'ListArticles',
      component: () => import('@/components/dashboard/blog/ListArticles.vue'),
      children: [
        {
          path: '/admin/edit/:id',
          name: 'EditArticle',
          props: true,
          component: () => import('@/components/dashboard/blog/EditArticle.vue')
        }
      ]
    },
  ]
})

export default router
