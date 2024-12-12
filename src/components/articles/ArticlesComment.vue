<script setup lang="ts">
  import { createComment } from '@/api'
  import { CreateCommentRequest } from '@/types/comments'
  import { ref, shallowRef } from 'vue'

  const props = defineProps<{ id: number }>()

  const form = ref<CreateCommentRequest>({
    article_id: props.id,
    body: '',
    subject: ''
  })

  const submited = shallowRef(false)

  const submitForm = async () => {
    await createComment(form.value)
    submited.value = true
  }
</script>

<template>
  <form v-show="!submited" class="max-w-sm" @submit.prevent="submitForm">
    <div class="mb-5">
      <label
        for="subject"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Тема</label
      >
      <input
        v-model="form.subject"
        type="text"
        id="subject"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Тема"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="body"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Комментарий</label
      >
      <textarea
        v-model="form.body"
        id="body"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Отправить
    </button>
  </form>

  <div
    v-show="submited"
    class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
    role="alert"
  >
    <span class="font-medium">Ваше сообщение успешно отправлено!</span>
  </div>
</template>

<style lang="scss" scoped></style>
