import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Main from './views/Main'
import NavBar from './components/NavBar'

function App() {
  const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    typography: {
      button: { textTransform: 'none' },
    },
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
