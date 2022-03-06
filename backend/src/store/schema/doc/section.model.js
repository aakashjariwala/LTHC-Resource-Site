import mongoose from 'mongoose'

const options = {
  collection: 'sections',
}

const sectionSchema = new mongoose.Schema(
  {
    docId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    label: {
      type: String,
      required: true,
    },
    header: {
      type: String,
    },
    body: {
      type: String,
    },
    subsections: {},
  },
  options
)

const Section = mongoose.model('Section', sectionSchema)

export default Section
