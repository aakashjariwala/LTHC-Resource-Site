import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CheckIcon from '@mui/icons-material/Check'
import {
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import useFirebase from '../../hooks/useFirebase'
import Main from '../Main'

export default function UploadPdf() {
  const { uploadPDF } = useFirebase()
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
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
      <Stack mt={4} direction="row" alignItems="center">
        <TextField
          label="Passphrase"
          variant="outlined"
          autoComplete="off"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value.trim())}
          sx={{ mr: 2 }}
        />
        {(() => {
          if (isUploading)
            return showSuccess ? (
              <CheckIcon sx={{ color: '#07bc0c', fontSize: '32px' }} />
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
      </Stack>

      <Box mt={8}>
        <Typography variant="h6">PDF Preview</Typography>
        <hr />
      </Box>
      <Box>
        <Main preview pdf={file} />
      </Box>
    </Container>
  )
}
