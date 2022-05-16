import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback, useEffect, useState } from 'react'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

if (!process.env.REACT_APP_API_KEY || !process.env.REACT_APP_APP_ID)
  console.log('missing firebase keys!')

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const auth = getAuth(app)

export default function useFirebase() {
  const [uid, setUid] = useState()

  useEffect(() => {
    signInWithEmailAndPassword(
      auth,
      process.env.REACT_APP_USER_EMAIL,
      process.env.REACT_APP_USER_PASSWORD
    )
      .then((userCred) => {
        const { user } = userCred
        setUid(user.uid)
      })
      .catch(() => {})
  }, [])

  const getPDFUrl = useCallback(async () => {
    if (!uid) return ''
    return getDownloadURL(ref(storage, `lthc/${uid}/lthc.pdf`))
  }, [storage, uid])

  const uploadPDF = useCallback(
    (pdf) => uploadBytes(ref(storage, `lthc/${uid}/lthc.pdf`), pdf),
    [storage, uid]
  )

  return { uid, getPDFUrl, uploadPDF }
}
