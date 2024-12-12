import { usePost } from '@/services/api'
import { CreateCommentRequest } from '@/types/comments'

export const createComment = async (data: CreateCommentRequest) => {
  return await usePost('comments', data)
}