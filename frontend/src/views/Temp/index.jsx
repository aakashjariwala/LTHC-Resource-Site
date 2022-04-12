import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { uploadPDF } from '../../hooks/useFirebase'

export default function Temp() {
  const inputRef = useRef(null)
  const [file, setFile] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const onSubmit = async () => {}

  const onFileChange = (e) => {}

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
