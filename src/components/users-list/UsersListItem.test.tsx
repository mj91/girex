import { UsersListItem } from './UsersListItem'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('../../containers/user-repos/UserRepos.tsx', () => ({
  UserRepos: ({ login }: { login: string }) => <div>{`${login}'s repos`}</div>,
}))

describe('UsersListItem', () => {
  beforeEach(() => {
    render(<UsersListItem user={{ login: 'mj91' }} />)
  })

  it('renders user', () => {
    expect(screen.getByText('mj91')).toBeInTheDocument()
  })

  it('renders expand icon', () => {
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  it('does not render user repos until revealed', () => {
    expect(screen.queryByText(`mj91's repos`)).toBeNull()
  })

  it('expands on header click', () => {
    const header = screen.getByText('mj91')
    userEvent.click(header)

    expect(screen.getByText(`mj91's repos`)).toBeInTheDocument()
  })
})
