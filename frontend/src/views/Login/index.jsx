import { Box, Button, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { LOGIN_USER } from '../../api/user'

const Login = () => {
  const [loginUser, { loading, error, data, reset }] = useMutation(LOGIN_USER)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    loginUser({
      variables: { username, password },
    })
  }

  useEffect(() => {
    if (error) {
      alert('Error logging in!')
      reset()
    } else if (data !== undefined) {
      alert(data.login ? 'Success!' : 'Invalid login!')
      reset()
    }
  }, [loading, error, data])

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h2">Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        sx={{ mt: 1, display: 'block' }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        sx={{ mt: 1, display: 'block' }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button sx={{ mt: 2 }} variant="contained" onClick={handleClick}>
        Login
      </Button>
      {loading && <Typography>Logging in...</Typography>}
    </Box>
  )
}

export default Login
