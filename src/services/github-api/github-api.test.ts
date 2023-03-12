import { GithubApiService } from './github-api'
import { ReposResult, SearchUsersResult } from './types'

const fetchMock = jest.fn()

global.fetch = fetchMock

describe('GithubApiService', () => {
  const githubApiService = new GithubApiService()

  describe('searchUsers', () => {
    describe('onSuccess', () => {
      const mockResult: SearchUsersResult = { items: [{ login: 'mj91' }] }
      const jsonMock = jest.fn()

      beforeEach(() => {
        jsonMock.mockResolvedValue(mockResult)
        fetchMock.mockResolvedValue({ ok: true, json: jsonMock })
      })

      it('should make a proper call', () => {
        githubApiService.searchUsers({ q: 'users' })

        expect(fetchMock).toHaveBeenCalledWith(
          'https://api.github.com/search/users?q=users',
          undefined
        )
      })

      it('should pass page limit', () => {
        githubApiService.searchUsers({ q: 'users', per_page: 5 })

        expect(fetchMock).toHaveBeenCalledWith(
          'https://api.github.com/search/users?q=users&per_page=5',
          undefined
        )
      })

      it('should return parsed results', async () => {
        const result = await githubApiService.searchUsers({ q: 'users' })
        expect(jsonMock).toHaveBeenCalled()
        expect(result).toEqual(mockResult)
      })
    })

    describe('onError', () => {
      it('should throw error with api message when available', async () => {
        const mockResult = { message: 'API error' }
        const jsonMock = jest.fn().mockResolvedValueOnce(mockResult)
        fetchMock.mockResolvedValueOnce({
          ok: false,
          status: 500,
          json: jsonMock,
        })

        await expect(
          githubApiService.searchUsers({ q: 'users' })
        ).rejects.toThrow('API error')
      })

      it('should throw error with status code when available', async () => {
        fetchMock.mockResolvedValueOnce({ ok: false, status: 500 })

        await expect(
          githubApiService.searchUsers({ q: 'users' })
        ).rejects.toThrow('500')
      })

      it('should throw other errors', async () => {
        fetchMock.mockRejectedValueOnce(new Error('Unknown error'))

        await expect(
          githubApiService.searchUsers({ q: 'users' })
        ).rejects.toThrow('Unknown error')
      })
    })
  })

  describe('usersRepos', () => {
    describe('onSuccess', () => {
      const mockResult: ReposResult = [
        {
          name: 'girex',
          description: 'Github repositories explorer',
          stargazers_count: 9000,
        },
      ]
      const jsonMock = jest.fn()

      beforeEach(() => {
        jsonMock.mockResolvedValue(mockResult)
        fetchMock.mockResolvedValue({ ok: true, json: jsonMock })
      })

      it('should make a proper call', () => {
        githubApiService.usersRepos({ login: 'mj91' })

        expect(fetchMock).toHaveBeenCalledWith(
          'https://api.github.com/users/mj91/repos',
          undefined
        )
      })

      it('should pass page limit', () => {
        githubApiService.usersRepos({ login: 'mj91' })

        expect(fetchMock).toHaveBeenCalledWith(
          'https://api.github.com/users/mj91/repos',
          undefined
        )
      })

      it('should return parsed results', async () => {
        const result = await githubApiService.usersRepos({ login: 'mj91' })
        expect(jsonMock).toHaveBeenCalled()
        expect(result).toEqual(mockResult)
      })
    })

    describe('onError', () => {
      it('should throw error with api message when available', async () => {
        const mockResult = { message: 'API error' }
        const jsonMock = jest.fn().mockResolvedValueOnce(mockResult)
        fetchMock.mockResolvedValueOnce({
          ok: false,
          status: 500,
          json: jsonMock,
        })

        await expect(
          githubApiService.usersRepos({ login: 'mj91' })
        ).rejects.toThrow('API error')
      })

      it('should throw error with status code when available', async () => {
        fetchMock.mockResolvedValueOnce({ ok: false, status: 500 })

        await expect(
          githubApiService.usersRepos({ login: 'mj91' })
        ).rejects.toThrow('500')
      })

      it('should throw other errors', async () => {
        fetchMock.mockRejectedValueOnce(new Error('Unknown error'))

        await expect(
          githubApiService.usersRepos({ login: 'mj91' })
        ).rejects.toThrow('Unknown error')
      })
    })
  })
})
