<script setup lang="ts">
  import { useArticlesStore } from '@/store/articles'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const { pagination } = storeToRefs(useArticlesStore())

  const showPagination = computed(() => {
    if (pagination.value) {
      return pagination.value.last_page > 1
    }

    return false
  })
</script>

<template>
  <nav v-if="showPagination" aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <RouterLink
          :to="{
            name: 'articles',
            params: { ...route.params },
            query: { page: 1 }
          }"
          :class="{ 'pointer-events-none': pagination?.current_page === 1 }"
          class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">В начало</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </RouterLink>
      </li>
      <li v-for="page in pagination?.last_page">
        <RouterLink
          :to="{
            name: 'articles',
            params: { ...route.params },
            query: { page }
          }"
          href="#"
          aria-current="page"
          :class="{
            'text-blue-600': pagination?.current_page === page
          }"
          class="z-10 flex items-center justify-center px-4 h-10 leading-tight border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >{{ page }}</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            name: 'articles',
            params: { ...route.params },
            query: { page: pagination?.last_page }
          }"
          :class="{
            'pointer-events-none':
              pagination?.current_page === pagination?.last_page
          }"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">В конец</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
