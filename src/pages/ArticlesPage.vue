<script setup lang="ts">
  import { getArticles, getTags } from '@/api'
  import {
    ArticlesList,
    ArticlesPagination,
    ArticlesTagList
  } from '@/components/articles'
  import { useArticlesStore } from '@/store/articles'
  import { Tag } from '@/types/tags'
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const tags = ref<Tag[]>([])
  const { setItems, setPagination } = useArticlesStore()

  const loadTags = async () => {
    const { data } = await getTags()
    tags.value = data.data
  }

  const loadArticles = async () => {
    const query = Object.assign({ limit: 10 }, { ...route.query })
    const { data } = await getArticles(query)

    setItems(data.data)
    setPagination(data.meta)
  }

  loadTags()
  loadArticles()

  watch(
    () => route.query,
    () => {
      loadArticles()
      loadTags()
    }
  )
</script>

<template>
  <div class="flex justify-start pb-5">
    <div class="w-1/4">
      <ArticlesTagList :tags="tags" />
    </div>

    <div>
      <ArticlesList />

      <div class="flex justify-center">
        <ArticlesPagination />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
