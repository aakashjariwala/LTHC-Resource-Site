import { useEffect, useState } from 'react'
import axios from 'axios'
import { convertDataURIToBinary, pdfAsArray } from './parsePdf'

// TODO put in .env
const pdfPath = '2022/04/pdf-template-1.pdf'

export default function SiteData() {
  const [aboutText, setAboutText] = useState('')

  useEffect(() => {
    axios
      .get(pdfPath, {
        responseType: 'blob',
      })
      .then((res) => {
        const blob = res.data
        const file = new File([blob], 'temp.pdf')
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onloadend = async (event) => {
          const array = convertDataURIToBinary(event.target.result)
          const text = await pdfAsArray(array)
          parseText(text)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const parseAbout = (text) => {
    const begin = '<begin:section:about>'
    const end = '<end:section:about>'
    const idx = text.indexOf(begin)
    const endIdx = text.indexOf(end)
    console.log(idx, endIdx, text.substring(idx + begin.length, endIdx).trim())
    setAboutText(text.substring(idx + begin.length, endIdx).trim())
  }

  const parseText = (text) => {
    // TODO parse text
    console.log(text)
    parseAbout(text)
  }

  return { aboutText }
}
