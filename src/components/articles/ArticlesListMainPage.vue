<script setup lang="ts">
  import { useArticlesStore } from '@/store/articles'
  import { ArticlesListMainPageItem } from '.'
  import { storeToRefs } from 'pinia'

  const { items } = storeToRefs(useArticlesStore())
</script>

<template>
  <div class="flex gap-3">
    <ArticlesListMainPageItem
      v-for="item in items"
      :item="item"
      :key="item.id"
    />
  </div>
</template>

<style lang="scss" scoped></style>
