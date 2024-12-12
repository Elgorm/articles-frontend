export type PaginationLinks = {
  active: boolean
  label: string
  url: string | null
}

export type PaginationMeta = {
  current_page: number
  from: number
  last_page: number
  links: PaginationLinks[]
  path: string
  per_page: number
  to: number
  total: number
}