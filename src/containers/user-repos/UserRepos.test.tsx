import { useUsersRepos } from '../../contexts/github'
import { UserRepos } from './UserRepos'
import { render, screen } from '@testing-library/react'
import { UseQueryResult } from 'react-query'
import { ReposResult } from '../../services/github-api'

jest.mock('../../contexts/github')

const mockUseUsersRepos = jest.mocked(useUsersRepos)

describe('UserRepos', () => {
  beforeEach(() => {
    mockUseUsersRepos.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: false,
    } as unknown as UseQueryResult<ReposResult>)

    render(<UserRepos login="mj91" />)
  })

  it('uses data hook', async () => {
    expect(useUsersRepos).toHaveBeenCalledWith('mj91')
  })

  describe('on error', () => {
    beforeEach(() => {
      mockUseUsersRepos.mockReturnValue({
        data: undefined,
        error: 'Test Error',
        isLoading: false,
      } as unknown as UseQueryResult<ReposResult>)

      render(<UserRepos login="mj91" />)
    })

    it('renders error', () => {
      expect(screen.getByText('Test Error')).toBeInTheDocument()
    })
  })

  describe('on loading', () => {
    beforeEach(() => {
      mockUseUsersRepos.mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: true,
      } as unknown as UseQueryResult<ReposResult>)

      render(<UserRepos login="mj91" />)
    })

    it('renders loading state', () => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })
  })

  describe('on successful data fetch', () => {
    beforeEach(() => {
      mockUseUsersRepos.mockReturnValue({
        data: [{ name: 'girex' }],
        error: undefined,
        isLoading: false,
      } as unknown as UseQueryResult<ReposResult>)

      render(<UserRepos login="mj91" />)
    })

    it('renders fetched data', () => {
      expect(screen.getByText('girex')).toBeInTheDocument()
    })
  })
})
