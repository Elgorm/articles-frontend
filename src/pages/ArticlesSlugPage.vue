<script setup lang="ts">
  import { getArticleBySlug } from '@/api'
  import { ArticleDetail } from '@/components/articles'
  import { useArticlesStore } from '@/store/articles'
  import { AxiosError } from 'axios'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const articlesStore = useArticlesStore()

  const { setCurrentArticle } = articlesStore

  const loadArticle = async () => {
    try {
      const { data } = await getArticleBySlug(route.params.slug.toString())
      setCurrentArticle(data.data)
    } catch (err) {
      const axiosError = err as AxiosError
      if (axiosError.status === 404) {
        router.push({
          name: 'NotFoundArticle',
          params: { slug: route.params.slug }
        })
      }
    }
  }

  loadArticle()
</script>

<template>
  <div>
    <ArticleDetail />
  </div>
</template>

<style lang="scss" scoped></style>
