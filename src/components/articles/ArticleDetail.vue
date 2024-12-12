<script setup lang="ts">
  import { useArticlesStore } from '@/store/articles'
  import { storeToRefs } from 'pinia'
  import { ArticlesComment, ArticlesView } from '@/components/articles'
  import ArticlesLike from './ArticlesLike.vue'
  import ArticlesTagList from './ArticlesTagList.vue'

  const { currentArticle } = storeToRefs(useArticlesStore())
</script>

<template>
  <div v-if="currentArticle" class="py-5">
    <h1 class="text-[24px] font-bold">{{ currentArticle.title }}</h1>

    <div class="mt-5 flex items-center gap-2">
      <ArticlesView :count="currentArticle.views" />
      <ArticlesLike :count="currentArticle.likes" :id="currentArticle.id" />
    </div>

    <div class="mt-5">
      <ArticlesTagList :tags="currentArticle.tags" />
    </div>

    <div class="mt-5">
      <img :src="currentArticle.photo_url" />
    </div>

    <div class="text-justify">
      {{ currentArticle.content }}
    </div>

    <div class="mt-5">
      <ArticlesComment :id="currentArticle.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
