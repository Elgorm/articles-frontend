<script setup lang="ts">
  defineProps<{ count: number }>()
</script>

<template>
  <div class="flex items-center gap-1">
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
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>

    <div class="font-bold">
      {{ count }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
