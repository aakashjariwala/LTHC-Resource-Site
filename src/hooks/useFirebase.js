import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'

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

export const getPDFUrl = () => getDownloadURL(ref(storage, 'lthc/lthc.pdf'))

export const uploadPDF = (pdf) =>
  uploadBytes(ref(storage, 'lthc/lthc.pdf'), pdf)
