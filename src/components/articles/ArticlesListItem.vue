<script setup lang="ts">
  import { Article } from '@/types/articles'
  import { ArticlesLike, ArticlesView } from '@/components/articles'

  defineProps<{ item: Article }>()
</script>

<template>
  <div class="border border-gray-500 shadow-md pb-5">
    <div>
      <RouterLink :to="{ name: 'articles-slug', params: { slug: item.slug } }">
        <div>
          <img :src="item.photo_url" />
        </div>

        <div class="mt-4 font-bold text-black px-3">
          {{ item.title }}
        </div>
      </RouterLink>

      <div class="mt-5 text-justify px-3">
        {{ item.short_content }}
      </div>

      <div class="mt-5 text-justify px-3 flex justify-between">
        <ArticlesView :count="item.views" />
        <ArticlesLike :count="item.likes" :id="item.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
