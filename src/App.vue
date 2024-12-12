<script setup lang="ts">
  import { LayoutNavbar } from './components/layout'
</script>

<template>
  <div>
    <div><LayoutNavbar /></div>
    <div class="max-w-[1024px] mt-0 mx-auto mt-5"><RouterView /></div>
  </div>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>

