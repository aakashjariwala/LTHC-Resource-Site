import mongoose from 'mongoose'

const options = {
  collection: 'sections',
}

const sectionSchema = new mongoose.Schema(
  {
    docId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    header: {
      level: {
        type: Number,
      },
      text: {
        type: String,
      },
    },
    body: {
      text: {
        type: String,
      },
    },
  },
  options
)

const Section = mongoose.model('Section', sectionSchema)

export default Section
