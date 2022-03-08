import mongoose from 'mongoose'
import { genSalt, hash, compareSync } from 'bcrypt'

const options = {
  collection: 'users',
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  options
)

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()

  genSalt(11, function (error, salt) {
    if (error) return next(error)
    hash(user.password, salt, function (hashError, newHash) {
      if (hashError) return next(hashError)
      user.password = newHash
      next()
    })
  })
})

userSchema.methods.validatePassword = function (checkPassword) {
  return compareSync(checkPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User
