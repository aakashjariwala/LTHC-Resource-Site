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
  return <div>hi</div>
}
