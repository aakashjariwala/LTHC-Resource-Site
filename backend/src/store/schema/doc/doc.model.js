import mongoose from 'mongoose'

const options = {
  collection: 'docs',
}

const docSchema = new mongoose.Schema(
  {
    sections: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Section',
        },
      ],
      required: true,
    },
  },
  options
)

const Doc = mongoose.model('Doc', docSchema)

export default Doc
