<script setup lang="ts">
  import { getArticles } from '@/api'
  import ArticlesListMainPage from '@/components/articles/ArticlesListMainPage.vue'
  import { useArticlesStore } from '@/store/articles'

  const { setItems } = useArticlesStore()

  const loadArticles = async () => {
    const result = await getArticles({ limit: 6 })
    setItems(result.data.data)
  }

  loadArticles()
</script>

<template>
  <div><ArticlesListMainPage /></div>
</template>

<style lang="scss" scoped></style>
