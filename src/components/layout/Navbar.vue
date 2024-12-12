<script setup lang="ts">
  import { useIsActiveLink } from '@/utils'
</script>

<template>
  <div class="shadow-lg">
    <div
      class="flex justify-between items-center max-w-[1024px] h-16 mt-0 mx-auto"
    >
      <div>Тредиум</div>
      <div class="flex gap-2">
        <RouterLink :to="{ name: 'home' }" class="navbar-link"
          >На главную</RouterLink
        >
        <RouterLink
          :to="{ name: 'articles' }"
          :class="{ 'router-link-active': useIsActiveLink('/articles') }"
          class="navbar-link"
          >Статьи</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navbar-link {
    @apply [&.router-link-active]:underline [&.router-link-active]:text-[#646cff];
  }
</style>
