import { useEffect, useState } from 'react'
import axios from 'axios'
import { convertDataURIToBinary, pdfAsArray } from './parsePdf'

// TODO put in .env
const pdfPath =
  process.env.NODE_ENV === 'development'
    ? '2022/04/pdf-template-6.pdf'
    : 'https://jsbbvk.files.wordpress.com/2022/04/pdf-template-6.pdf'

export default function SiteData() {
  const [aboutText, setAboutText] = useState('')
  const [sectionsToShow, setSectionsToShow] = useState([])
  const [additionalResourcesText, setAdditionalResourcesText] = useState([])
  const [resourcesText, setResourcesText] = useState([])
  const [contactsText, setContactsText] = useState({})

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

  const parseAdditionalResources = (text) => {
    const begin = '<begin:section:additional resources>'
    const end = '<end:section:additional resources>'
    const beginIdx = text.indexOf(begin)
    const endIdx = text.indexOf(end)
    const additionalResources = text
      .substring(beginIdx + begin.length, endIdx)
      .trim()
    const beginTag = '<begin:additional resources:item>'
    const endTag = '<end:additional resources:item>'
    let cur = additionalResources.indexOf(beginTag)
    const str = []

    // have counter in case of infinite loop
    let c = 0
    while (c < 1000 && cur !== -1) {
      c += 1
      const eIdx = additionalResources.indexOf(endTag, cur + 1)
      str.push(
        additionalResources.substring(cur + beginTag.length, eIdx).trim()
      )
      cur = additionalResources.indexOf(beginTag, cur + 1)
    }
    setAdditionalResourcesText(str)
  }

  const parseSection = (tag, text) => {
    const beginTag = `<begin:section${tag}>`
    const endTag = `<end:section${tag}>`
    let newText = text
    let idx = newText.indexOf(beginTag)
    const end = newText.indexOf(endTag)
    const sectionText = newText.substring(idx + beginTag.length, end).trim()
    newText =
      newText.substring(0, idx) +
      newText.substring(end + endTag.length, newText.length)
    idx = newText.indexOf(beginTag)
    return {
      type: 'section',
      text: sectionText.trim(),
      title: tag.substring(1),
    }
  }

  const parseResources = (text) => {
    const begin = '<begin:section:resources>'
    const end = '<end:section:resources>'
    let startIdx = text.indexOf(begin)
    let endIdx = text.indexOf(end)
    let parsedText = text.substring(startIdx + begin.length, endIdx).trim()

    const subTextArray = []

    const searchTag = '<begin:resources:'
    startIdx = parsedText.indexOf(searchTag)

    // have a counter just in case there is infinite loop
    let c = 0
    while (c < 1000 && startIdx !== -1) {
      c += 1
      const tag = parsedText.substring(
        startIdx + searchTag.length,
        parsedText.indexOf('>')
      )
      endIdx = parsedText.indexOf(`<end:resources:${tag}>`)
      const subText = parsedText
        .substring(startIdx + searchTag.length + tag.length + 1, endIdx)
        .trim()
      subTextArray.push({ tag, text: subText })
      parsedText = parsedText.substring(
        endIdx + `<end:resources:${tag}>`.length
      )
      startIdx = parsedText.indexOf(searchTag)
    }
    setResourcesText(subTextArray)
  }

  const parseContacts = (text) => {
    // helper function to parse a contact
    const parseContact = (_text) => ({
      name: _text
        .substring(
          _text.indexOf('<begin:name>') + '<begin:name>'.length,
          _text.indexOf('<end:name>')
        )
        .trim(),
      phone: _text
        .substring(
          _text.indexOf('<begin:phone>') + '<begin:phone>'.length,
          _text.indexOf('<end:phone>')
        )
        .trim(),
      description: _text
        .substring(
          _text.indexOf('<begin:description>') + '<begin:description>'.length,
          _text.indexOf('<end:description>')
        )
        .trim(),
    })

    const parseContactsList = (_text) => {
      let contactsString = _text
      const b = '<begin:contact>'
      const e = '<end:contact>'
      let sIdx
      let eIdx
      let c = 0
      const arr = []
      do {
        c += 1
        sIdx = contactsString.indexOf(b)
        eIdx = contactsString.indexOf(e)
        if (sIdx === -1) break

        const cText = contactsString.substring(sIdx + b.length, eIdx).trim()
        arr.push(parseContact(cText))
        contactsString = contactsString.substring(eIdx + e.length)
      } while (c < 10000 && sIdx !== -1)
      return arr
    }

    const begin = '<begin:section:contacts>'
    const end = '<end:section:contacts>'

    let startIdx = text.indexOf(begin)
    let endIdx = text.indexOf(end)

    let contacts = text.substring(startIdx + begin.length, endIdx).trim()
    const obj = {}
    let c = 0
    do {
      c += 1
      const searchTag = '<begin:contacts:'
      startIdx = contacts.indexOf(searchTag)
      if (startIdx === -1) break
      const title = contacts.substring(
        startIdx + searchTag.length,
        contacts.indexOf('>')
      )
      endIdx = contacts.indexOf(`<end:contacts:${title}>`)

      const contact = contacts
        .substring(startIdx + searchTag.length + title.length + 1, endIdx)
        .trim()

      obj[title] = parseContactsList(contact)
      contacts = contacts.substring(endIdx + `<end:contacts:${title}>`.length)
    } while (c < 1000 && startIdx !== -1)

    setContactsText(obj)
  }

  const parseText = (text) => {
    let newText = text
    let idx = newText.indexOf('<begin:section')
    const sections = []

    // have counter in case of infinite loop
    let c = 0
    while (c < 1000 && idx !== -1) {
      c += 1
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
        parseResources(newText)
        sections.push({ type: 'resources' })
        endTag = '<end:section:resources>'
      } else if (tagType === ':additional resources') {
        parseAdditionalResources(newText)
        sections.push({ type: 'additional resources' })
        endTag = '<end:section:additional resources>'
      } else if (tagType === ':contacts') {
        parseContacts(newText)
        sections.push({ type: 'contacts' })
        endTag = '<end:section:contacts>'
      } else if (tagType === '') {
        sections.push(parseSection('', newText))
        endTag = '<end:section>'
      } else {
        sections.push(parseSection(tagType, newText))
        endTag = `<end:section:${tagType}>`
      }
      newText =
        newText.substring(0, idx) +
        newText.substring(
          newText.indexOf(`<end:section${tagType}>`) + endTag.length,
          newText.length
        )
      idx = newText.indexOf('<begin:section')
    }
    setSectionsToShow(sections)
  }

  return {
    aboutText,
    sectionsToShow,
    additionalResourcesText,
    resourcesText,
    contactsText,
  }
}
