import mongoose from 'mongoose'

const connection = () => {
  return new Promise((resolve, reject) => {
    try {
      const uri = process.env.ATLAS_URI
      if (!uri) reject(new Error('You do not have the MongoDB uri'))

      mongoose.connect(uri)
      const db = mongoose.connection
      db.once('open', () => {
        console.log('Connected to Mongodb')
        return resolve()
      })
    } catch (e) {
      reject(e)
    }
  })
}

export default connection
