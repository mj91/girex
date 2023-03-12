import { CssBaseline } from '@mui/material'
import { Explore } from './components/views/explore/Explore'
import { GithubProvider } from './contexts/github/github'

export const App = () => {
  return (
    <>
      <CssBaseline />
      <GithubProvider>
        <Explore />
      </GithubProvider>
    </>
  )
}
