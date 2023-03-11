import {
  ReposResult,
  SearchParams,
  SearchUsersResult,
  UsersParams,
} from './types'

export class GithubApiService {
  private baseUrl: string

  constructor(baseUrl = 'https://api.github.com') {
    this.baseUrl = baseUrl
  }

  private fetch = async <R>(
    resource: string,
    options?: RequestInit
  ): Promise<R> => {
    const response = await fetch(`${this.baseUrl}${resource}`, options)

    if (!response.ok) {
      let errorToThrow
      try {
        errorToThrow = new Error((await response.json()).message)
      } catch (e) {
        errorToThrow = e
        try {
          errorToThrow = new Error(response.status.toString())
        } catch (e) {
          errorToThrow = e
        }
      } finally {
        // It's an intentional no-unsafe-finally rule violation - it's necessary to make sure an error is thrown when response is not valid
        // eslint-disable-next-line no-unsafe-finally
        throw errorToThrow
      }
    }
    return await response.json()
  }

  public searchUsers = async (
    { q, per_page }: SearchParams,
    options?: RequestInit
  ): Promise<SearchUsersResult> =>
    await this.fetch(
      `/search/users?q=${q}${
        per_page !== undefined ? `&per_page=${per_page}` : ''
      }`,
      options
    )

  public usersRepos = async (
    { login }: UsersParams,
    options?: RequestInit
  ): Promise<ReposResult> => await this.fetch(`/users/${login}/repos`, options)
}
