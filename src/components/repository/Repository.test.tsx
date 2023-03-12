import { Repository } from './Repository'
import { render, screen } from '@testing-library/react'

describe('Repository', () => {
  beforeEach(() => {
    render(
      <Repository
        repo={{
          name: 'girex',
          description: 'Github repositories explorer',
          stargazers_count: 9000,
          html_url: 'https://github.com/mj91/girex',
        }}
      />
    )
  })

  it('renders repository name as link', () => {
    const link = screen.getByText('girex')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://github.com/mj91/girex')
  })

  it('renders stars count', () => {
    expect(screen.getByText('9000')).toBeInTheDocument()
    expect(screen.getByTestId('StarIcon')).toBeInTheDocument()
  })

  it('renders description', () => {
    const description = screen.getByText('Github repositories explorer')

    expect(description).toBeInTheDocument()
  })
})
