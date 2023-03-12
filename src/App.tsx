import { CssBaseline, ThemeProvider } from '@mui/material'
import { Explore } from './components/views/explore/Explore'
import { GithubProvider } from './contexts/github/github'
import { theme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GithubProvider>
        <Explore />
      </GithubProvider>
    </ThemeProvider>
  )
}
