import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { uploadPDF } from '../../hooks/useFirebase'

export default function UploadPdf() {
  const inputRef = useRef(null)
  const [file, setFile] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [phrase, setPhrase] = useState('')

  useEffect(() => {
    if (!setShowSuccess) return () => {}
    const timeout = setTimeout(() => {
      setShowSuccess(false)
      setIsUploading(false)
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [showSuccess])

  const onSubmit = async () => {
    if (!file || isUploading) return

    if (phrase !== process.env.REACT_APP_LTHC_PASS) {
      alert('Invalid passphrase')
      setPhrase('')
      return
    }

    const allowedExtensions = /(\.pdf)$/i
    if (!allowedExtensions.exec(file.name)) {
      // alert('Invalid file type')
      inputRef.current.value = ''
      return
    }

    setIsUploading(true)
    await uploadPDF(file)
    setShowSuccess(true)
    inputRef.current.value = ''
    setPhrase('')
    setFile(null)
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h6">Upload PDF to modify website</Typography>

      <Box mt={2}>
        <input
          type="file"
          accept=".pdf"
          onChange={onFileChange}
          ref={inputRef}
        />
      </Box>
      <Box mt={3}>
        <TextField
          label="Passphrase"
          variant="standard"
          autoComplete="off"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value.trim())}
        />
      </Box>
      <Box mt={3}>
        {(() => {
          if (isUploading)
            return showSuccess ? (
              <Typography>Success!</Typography>
            ) : (
              <CircularProgress />
            )
          return (
            <Button
              variant="contained"
              onClick={onSubmit}
              sx={{
                borderRadius: '25px',
                background: '#4a4a4a',
                '&:hover': {
                  background: '#575757',
                },
              }}
            >
              Upload
            </Button>
          )
        })()}
      </Box>
    </Container>
  )
}
