import { Box, Button, TextField, Typography } from '@mui/material'

const Login = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h2">Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        sx={{ mt: 1, display: 'block' }}
      />
      <TextField
        label="Password"
        variant="outlined"
        sx={{ mt: 1, display: 'block' }}
      />
      <Button sx={{ mt: 2 }} variant="contained">
        Login
      </Button>
    </Box>
  )
}

export default Login
