import { createRouter, createWebHistory } from 'vue-router'
import { MainPage, ArticlesPage, ArticlesSlugPage, NotFound } from '@/pages'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },

    {
      path: '/articles',
      name: 'articles',
      component: ArticlesPage,
    },

    {
      path: '/articles/:slug',
      name: 'articles-slug',
      component: ArticlesSlugPage,
    },

    { path: "/articles/:slug", name: "NotFoundArticle", component: NotFound },

  ],
})

export default router
