import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import Main from './views/Main'
import UploadPdf from './views/UploadPdf'
import Footer from './components/Footer'

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
            <Route path="/" exact element={<Main />} />
            <Route path="/upload-pdf" exact element={<UploadPdf />} />
            <Route
              path="*"
              exact
              element={
                <Typography variant="h5" sx={{ pt: 5, textAlign: 'center' }}>
                  404 Page Not Found
                </Typography>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <Footer />
    </>
  )
}

export default App
