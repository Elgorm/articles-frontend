import { useGet, usePost } from '@/services/api'

export const getArticles = async (filter: object) => {
  return await useGet('articles', filter)
}

export const getArticleBySlug = async (slug: string) => {
  return await useGet(`articles/${slug}`)
}

export const setLike = async (id: number) => {
  return await usePost(`articles/${id}/like`)
}