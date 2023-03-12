import { createTheme, Shadows } from '@mui/material'

export const theme = createTheme({
  shape: {
    borderRadius: 2,
  },
  palette: {
    primary: {
      main: '#2d9cdb',
    },
  },
  shadows: Array(25).fill('none') as Shadows,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: 20,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#f2f2f2',
          '&.Mui-expanded': {
            minHeight: 48,
          },
        },
        content: {
          '&.Mui-expanded': {
            marginTop: 12,
            marginBottom: 12,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 8,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#000',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
})
