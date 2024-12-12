import { useGet } from '@/services/api'

export const getTags = async () => {
  return await useGet('tags')
}