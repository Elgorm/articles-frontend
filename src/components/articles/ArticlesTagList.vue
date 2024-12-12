<script setup lang="ts">
  import { Tag } from '@/types/tags'

  defineProps<{ tags?: Tag[] }>()
</script>

<template>
  <div v-if="tags" class="flex gap-2 flex-wrap">
    <RouterLink
      v-for="tag in tags"
      :to="{
        name: 'articles',
        query: {
          tag: tag.label
        }
      }"
      :key="tag.id"
      class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
    >
      {{ tag.label }}
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
