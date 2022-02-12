import mongoose from 'mongoose'

const options = {
  collection: 'users',
}

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  options
)

const User = mongoose.model('User', userSchema)

export default User
