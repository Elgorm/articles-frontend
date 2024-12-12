<script setup lang="ts">
  import { useArticlesStore } from '@/store/articles'
  import { ArticlesListItem } from '.'
  import { storeToRefs } from 'pinia'

  const { items } = storeToRefs(useArticlesStore())
</script>

<template>
  <div class="flex flex-col gap-4 py-5">
    <ArticlesListItem v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>

<style lang="scss" scoped></style>
