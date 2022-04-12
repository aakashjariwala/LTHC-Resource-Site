import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'lthc-343004.firebaseapp.com',
  projectId: 'lthc-343004',
  storageBucket: 'lthc-343004.appspot.com',
  messagingSenderId: '242225535777',
  appId: process.env.REACT_APP_APPID,
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const getPDFUrl = () => getDownloadURL(ref(storage, 'lthc/lthc.pdf'))

export const uploadPDF = (pdf) =>
  uploadBytes(ref(storage, 'lthc/lthc.pdf'), pdf)
