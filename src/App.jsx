import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Box,
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1 }}>
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
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
