import { GithubProvider, useSearchUsers, useUsersRepos } from './github'
import { act, renderHook, waitFor } from '@testing-library/react'
import { GithubApiService } from '../../services/github-api'

jest.mock('../../services/github-api')

const muteConsoleErrors = () => {
  const originalError = console.error
  console.error = jest.fn()

  return () => {
    console.error = originalError
  }
}

describe('useSearchUsers', () => {
  it('throws an error when used out of GithubProvider scope', () => {
    const unmuteConsoleErrors = muteConsoleErrors()
    try {
      renderHook(() => useSearchUsers('mj91'))
    } catch (e) {
      expect(e).toBeDefined()
    } finally {
      unmuteConsoleErrors()
    }
  })

  it('returns data, isLoading and error properties', async () => {
    const { result } = renderHook(() => useSearchUsers('mj91'), {
      wrapper: GithubProvider,
    })

    await act(async () => {
      await waitFor(() => {
        expect(
          jest.mocked(GithubApiService).prototype.searchUsers
        ).toHaveBeenCalledTimes(1)
      })
    })

    expect(result.current).toEqual(
      expect.objectContaining({
        data: undefined,
        isLoading: expect.any(Boolean),
        error: null,
      })
    )
  })

  it('calls GithubApiService searchUsers method properly', async () => {
    renderHook(() => useSearchUsers('mj91'), {
      wrapper: GithubProvider,
    })

    await act(async () => {
      await waitFor(() => {
        expect(
          jest.mocked(GithubApiService).prototype.searchUsers
        ).toHaveBeenCalledTimes(1)
      })
    })

    expect(
      jest.mocked(GithubApiService).prototype.searchUsers
    ).toHaveBeenCalledWith(
      { q: 'mj91', per_page: 5 },
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    )
  })
})

describe('useUsersRepos', () => {
  it('throws an error when used out of GithubProvider scope', () => {
    const unmuteConsoleErrors = muteConsoleErrors()
    try {
      renderHook(() => useUsersRepos('mj91'))
    } catch (e) {
      expect(e).toBeDefined()
    } finally {
      unmuteConsoleErrors()
    }
  })

  it('returns data, isLoading and error properties', async () => {
    const { result } = renderHook(() => useUsersRepos('mj91'), {
      wrapper: GithubProvider,
    })

    await act(async () => {
      await waitFor(() => {
        expect(
          jest.mocked(GithubApiService).prototype.usersRepos
        ).toHaveBeenCalledTimes(1)
      })
    })

    expect(result.current).toEqual(
      expect.objectContaining({
        data: undefined,
        isLoading: expect.any(Boolean),
        error: null,
      })
    )
  })

  it('calls GithubApiService usersRepos method properly', async () => {
    renderHook(() => useUsersRepos('mj91'), {
      wrapper: GithubProvider,
    })

    await act(async () => {
      await waitFor(() => {
        expect(
          jest.mocked(GithubApiService).prototype.usersRepos
        ).toHaveBeenCalledTimes(1)
      })
    })

    expect(
      jest.mocked(GithubApiService).prototype.usersRepos
    ).toHaveBeenCalledWith(
      { login: 'mj91' },
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    )
  })
})
