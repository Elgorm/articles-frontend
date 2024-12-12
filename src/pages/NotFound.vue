<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, запрашиваемая страница не существует.</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<style lang="scss" scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;

    h1 {
      font-size: 3rem;
      color: #ff5252;
    }

    p {
      margin: 20px 0;
      font-size: 1.2rem;
    }
  }
</style>
