import { useSearchUsers } from '../../contexts/github'
import { SearchUserResults } from './SearchUserResults'
import { render, screen } from '@testing-library/react'
import { UseQueryResult } from 'react-query'
import { SearchUsersResult } from '../../services/github-api'

jest.mock('../../contexts/github')

const mockUseSearchUsers = jest.mocked(useSearchUsers)

describe('SearchUserResults', () => {
  beforeEach(() => {
    mockUseSearchUsers.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: false,
    } as unknown as UseQueryResult<SearchUsersResult>)

    render(<SearchUserResults username="mj91" />)
  })

  it('uses data hook', async () => {
    expect(useSearchUsers).toHaveBeenCalledWith('mj91')
  })

  describe('on error', () => {
    beforeEach(() => {
      mockUseSearchUsers.mockReturnValue({
        data: undefined,
        error: 'Test Error',
        isLoading: false,
      } as unknown as UseQueryResult<SearchUsersResult>)

      render(<SearchUserResults username="mj91" />)
    })

    it('renders error', () => {
      expect(screen.getByText('Test Error')).toBeInTheDocument()
    })
  })

  describe('on loading', () => {
    beforeEach(() => {
      mockUseSearchUsers.mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: true,
      } as unknown as UseQueryResult<SearchUsersResult>)

      render(<SearchUserResults username="mj91" />)
    })

    it('renders loading state', () => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })
  })

  describe('on successful data fetch', () => {
    beforeEach(() => {
      mockUseSearchUsers.mockReturnValue({
        data: { items: [{ login: 'mj91' }] },
        error: undefined,
        isLoading: false,
      } as unknown as UseQueryResult<SearchUsersResult>)

      render(<SearchUserResults username="mj91" />)
    })

    it('renders fetched data', () => {
      expect(screen.getByText('mj91')).toBeInTheDocument()
    })
  })
})
