import { setLike } from '@/api'
import { Article } from '@/types/articles'
import { PaginationMeta } from '@/types/pagination'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    items: [] as Article[],
    pagination: null as PaginationMeta | null,
    currentArticle: null as Article | null
  }),
  getters: {},
  actions: {
    setItems(items: []) {
      this.$patch({ items })
    },

    setPagination(pagination: PaginationMeta | null) {
      this.$patch({ pagination })
    },

    setCurrentArticle(currentArticle: Article | null) {
      this.$patch({ currentArticle })
    },

    async like(id: number) {
      const { data } = await setLike(id)

      const idx = this.items.findIndex((item: Article) => item.id === data.id)

      // Обновляем лайк если есть в списке
      if (idx !== -1) {
        this.items[idx].likes = data.likes
      }

      // Обновляем лайк если статья открыта в данный момент
      if (this.currentArticle?.id && this.currentArticle?.id === data.id) {
        this.currentArticle.likes = data.likes
      }
    }
  },
})