import { useEffect } from 'react'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import axios from 'axios'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

// TODO put in .env
const pdfPath = '/2022/03/temp-1.pdf'

export default function SiteData() {
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

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
        fileReader.onloadend = (event) => {
          convertDataURIToBinary(event.target.result)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const BASE64_MARKER = ';base64,'

  const convertDataURIToBinary = (dataURI) => {
    const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length
    const base64 = dataURI.substring(base64Index)
    const raw = window.atob(base64)
    const rawLength = raw.length
    const array = new Uint8Array(new ArrayBuffer(rawLength))

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i)
    }
    pdfAsArray(array)
  }

  const pdfAsArray = (array) => {
    let documentText = ''

    pdfjsLib
      .getDocument(array)
      .promise.then((doc) => {
        const { numPages } = doc
        console.log('# Document Loaded')
        console.log('Number of Pages:', numPages)

        let lastPromise // will be used to chain promises
        lastPromise = doc.getMetadata().then((data) => {
          console.log('# Metadata Is Loaded')
          console.log('## Info')
          console.log(JSON.stringify(data.info, null, 2))
          if (data.metadata) {
            console.log('## Metadata')
            console.log(JSON.stringify(data.metadata.getAll(), null, 2))
          }
        })

        const loadPage = (pageNum) => {
          return doc.getPage(pageNum).then((page) => {
            console.log('# Page', pageNum)
            const viewport = page.getViewport({ scale: 1.0 })
            console.log('Size:', viewport.width, 'x', viewport.height)
            return page.getTextContent().then((content) => {
              // Content contains lots of information about the text layout and
              // styles, but we need only strings at the moment
              const strings = content.items.map((item) => {
                return item.str
              })
              console.log('## Text Content')
              console.log(strings.join(' '))
              documentText += strings.join(' ')
              // Release page resources.
              page.cleanup()
            })
          })
        }
        // Loading of the first page will wait on metadata and subsequent loadings
        // will wait on the previous pages.
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= numPages; i++) {
          lastPromise = lastPromise.then(loadPage.bind(null, i))
        }
        return lastPromise
      })
      .then(
        () => {
          parseText(documentText)
        },
        (err) => {
          console.error('Error:', err)
        }
      )
  }

  const parseText = (text) => {
    // TODO parse text
  }

  return {}
}
