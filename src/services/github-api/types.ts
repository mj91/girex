export type SearchParams = { q: string; per_page?: number }

export type User = {
  login: string
  [key: string]: unknown
}

export type SearchUsersResult = { items: User[] }

export interface SearchUsers {
  (params: SearchParams, options: RequestInit): Promise<SearchUsersResult>
}

export type Repo = {
  name: string
  description?: string
  stargazers_count: number
  [key: string]: unknown
}

export type UsersParams = {
  login: string
}
export type ReposResult = Repo[]
