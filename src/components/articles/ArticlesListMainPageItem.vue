<script setup lang="ts">
  import { Article } from '@/types/articles'
  import { ArticlesView, ArticlesLike } from '@/components/articles'

  defineProps<{ item: Article }>()
</script>

<template>
  <div class="border border-[gray] shadow-md w-[200px]">
    <div>
      <img :src="item.cover_url" />
    </div>

    <div class="p-3 flex flex-col justify-between">
      <RouterLink :to="{ name: 'articles-slug', params: { slug: item.slug } }">
        <h4 class="text-black font-semibold line-clamp-2 h-[48px]">
          {{ item.title }}
        </h4>
      </RouterLink>

      <div class="mt-3 text-ellipsis line-clamp-5">
        {{ item.short_content }}
      </div>

      <div class="flex justify-between">
        <ArticlesView :count="item.views" />
        <ArticlesLike :count="item.likes" :id="item.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
