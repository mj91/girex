import { UsersList } from './UsersList'
import { render, screen } from '@testing-library/react'

describe('UsersList', () => {
  beforeEach(() => {
    render(<UsersList users={[{ login: 'mj91' }, { login: 'jdrzjph' }]} />)
  })

  it('renders users', () => {
    expect(screen.getByText('mj91')).toBeInTheDocument()
    expect(screen.getByText('jdrzjph')).toBeInTheDocument()
  })
})
