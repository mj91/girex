import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders input', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Enter username').closest('input')
  expect(input).toBeInTheDocument()
})

test('renders button', () => {
  render(<App />)
  const button = screen.getByText('Search').closest('button')
  expect(button).toBeInTheDocument()
})
