import { Tag } from './tags'

export type Article = {
  id: number
  title: string
  content: string
  cover_url?: string
  photo_url?: string
  short_content?: string
  published_at?: string
  views: number
  likes: number
  slug: string
  tags?: Tag[]
}