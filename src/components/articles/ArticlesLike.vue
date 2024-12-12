<script setup lang="ts">
  import { useArticlesStore } from '@/store/articles'

  defineProps<{ count: number; id: number }>()
  const { like } = useArticlesStore()
</script>

<template>
  <div class="flex items-center gap-1 cursor-pointer" @click="like(id)">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M12 21C12 21 20 13 20 8C20 5.23858 17.7614 3 15 3C13.5858 3 12.2204 3.67157 11.5 5.07107C10.7796 3.67157 9.41421 3 8 3C5.23858 3 3 5.23858 3 8C3 13 12 21 12 21Z"
        />
      </svg>
    </div>

    <div v-show="count" class="font-bold">
      {{ count }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
