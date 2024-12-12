import { useRoute } from 'vue-router'

export const useIsActiveLink = (path: string) => {
  const route = useRoute()
  return route.path.includes(path)
}