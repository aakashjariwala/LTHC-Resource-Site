import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// import CreateAcct from './views/CreateAccount'
import Login from './views/Login'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  )
}

export default App
