import { Box, Button, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { CREATE_USER } from '../../api/user'

const CreateAccount = () => {
  const [createUser, { loading, error, data, reset }] = useMutation(CREATE_USER)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    createUser({
      variables: { username, password },
    })
  }

  useEffect(() => {
    if (error) {
      reset()
    } else if (data !== undefined) {
      reset()
    }
  }, [loading, error, data])

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h2">Create Account</Typography>
      <TextField
        label="New Username"
        variant="outlined"
        sx={{ mt: 1, display: 'block' }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="New Password"
        variant="outlined"
        sx={{ mt: 1, display: 'block' }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button sx={{ mt: 2 }} variant="contained" onClick={handleClick}>
        Create
      </Button>
      {loading && <Typography>Creating account...</Typography>}
    </Box>
  )
}

export default CreateAccount
