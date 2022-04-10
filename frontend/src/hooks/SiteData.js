import { useEffect, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import axios from 'axios'
import { convertDataURIToBinary, pdfAsArray } from './parsePdf'

// TODO put in .env
const pdfPath = '2022/04/pdf-template-1.pdf'

export default function SiteData() {
  const [aboutText, setAboutText] = useState('')
  const [sectionsToShow, setSectionsToShow] = useState([])

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
    const parsed = text.substring(idx + begin.length, endIdx).trim()
    setAboutText(parsed)
  }

  const parseSection = (text) => {
    let newText = text
    let idx = newText.indexOf('<begin:section>')
    const end = newText.indexOf('<end:section>')
    const sectionText = newText
      .substring(idx + '<begin:section>'.length, end)
      .trim()
    newText =
      newText.substring(0, idx) +
      newText.substring(end + '<end:section>'.length, newText.length)
    idx = newText.indexOf('<begin:section>')
    return { type: 'section', text: sectionText }
  }

  const parseText = (text) => {
    let newText = text
    let idx = newText.indexOf('<begin:section')
    const sections = []
    while (idx !== -1) {
      const tagType = newText.substring(
        idx + '<begin:section'.length,
        newText.indexOf('>')
      )
      let endTag = ''
      if (tagType === ':about') {
        parseAbout(newText)
        sections.push({ type: 'about' })
        endTag = '<end:section:about>'
      } else if (tagType === ':resources') {
        // TODO parse(newText)
        sections.push({ type: 'resources' })
        endTag = '<end:section:resources>'
      } else if (tagType === ':additional resources') {
        // TODO parse(newText)
        sections.push({ type: 'additional resources' })
        endTag = '<end:section:additional resources>'
      } else if (tagType === ':contacts') {
        // TODO parse(newText)
        sections.push({ type: 'contacts' })
        endTag = '<end:section:contacts>'
      } else if (tagType === '') {
        sections.push(parseSection(newText))
        endTag = '<end:section>'
      } else {
        console.error(`Bad parsing: invalid "${tagType}" tag!`)
        return
      }
      newText =
        newText.substring(0, idx) +
        newText.substring(
          newText.indexOf(`<end:section${tagType}>`) + endTag.length,
          newText.length
        )
      idx = newText.indexOf('<begin:section')
    }
    console.log(sections)
    setSectionsToShow(sections)
  }

  return { aboutText, sectionsToShow }
}
