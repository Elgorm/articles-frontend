export type CreateCommentRequest = {
  article_id: number
  subject: string
  body: string
}

export type Comment = {
  id: number
  subject: string
  body: string
  article_id: number
  created_at: string
  updated_at: string
}