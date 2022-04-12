import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
// import { uploadPDF } from '../../hooks/useFirebase'

export default function UploadPdf() {
  const inputRef = useRef(null)
  const [file, setFile] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
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

    const allowedExtensions = /(\.pdf)$/i
    if (!allowedExtensions.exec(file.name)) {
      // alert('Invalid file type')
      inputRef.current.value = ''
      return
    }

    setIsUploading(true)
    // await uploadPDF(file)
    setShowSuccess(true)
    inputRef.current.value = ''
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
        {(() => {
          if (isUploading)
            return showSuccess ? (
              <Typography>Success!</Typography>
            ) : (
              <CircularProgress />
            )
          return (
            <Button variant="contained" onClick={onSubmit}>
              Upload
            </Button>
          )
        })()}
      </Box>
    </Container>
  )
}
