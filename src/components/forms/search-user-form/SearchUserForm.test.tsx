import { SearchUserForm } from './SearchUserForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchUserForm', () => {
  const mockOnSubmit = jest.fn()
  let input: HTMLElement, button: HTMLElement

  beforeEach(() => {
    render(<SearchUserForm onSubmit={mockOnSubmit} />)
    input = screen.getByPlaceholderText('Enter username')
    button = screen.getByRole('button', { name: /Search/i })
  })

  it('renders input', () => {
    expect(input).toBeInTheDocument()
  })

  it('renders button', () => {
    expect(button).toBeInTheDocument()
  })

  it('calls onSubmit on button click', () => {
    userEvent.type(input, 'mj91')
    userEvent.click(button)

    expect(mockOnSubmit).toBeCalledWith('mj91')
  })

  it('calls onSubmit on Enter hit when input is focused', () => {
    userEvent.type(input, 'mj91{enter}')

    expect(mockOnSubmit).toBeCalledWith('mj91')
  })
})
