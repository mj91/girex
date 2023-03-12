import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
  useQuery,
} from 'react-query'
import { GithubApiService } from '../../services/github-api'

const queryClient = new QueryClient()

const githubApiService = new GithubApiService()

export const useSearchUsers = (searchTerm: string) =>
  useQuery(
    ['search', searchTerm],
    async ({ signal }) =>
      await githubApiService.searchUsers(
        { q: searchTerm, per_page: 5 },
        { signal }
      )
  )

export const useUsersRepos = (login: string) =>
  useQuery(
    ['repos', login],
    async ({ signal }) =>
      await githubApiService.usersRepos({ login }, { signal })
  )

export const GithubProvider = (
  props: Omit<QueryClientProviderProps, 'client'>
) => QueryClientProvider({ ...props, client: queryClient })
