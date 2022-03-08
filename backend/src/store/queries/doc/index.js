import handle from '../../../util/handle'
import { Doc, Section } from '../../schema'

export const createDoc = async () => {
  try {
    const doc = new Doc()
    await doc.save()
    return [doc, undefined]
  } catch (error) {
    console.error(error)
    return [undefined, error]
  }
}

export const getDoc = async (docId = undefined) => {
  // default to first one
  const [res, error] = await handle(Doc.findOne(docId ? { id: docId } : {}))
  if (error) {
    console.error(error)
    return [undefined, error]
  }
  // auto create one if not present
  if (!res) {
    const [createRes, createErr] = await createDoc()
    return [createRes, createErr]
  }
  return [res, undefined]
}

export const getSection = async (sectionId) => {
  const [res, error] = await handle(Section.findById(sectionId))
  if (error) {
    console.error(error)
    return [undefined, error]
  }
  console.error(error)
  return [res, undefined]
}

export const addSection = async (section, docId = undefined) => {
  try {
    const [doc, error] = await getDoc(docId)
    if (error) {
      console.error(error)
      return [undefined, error]
    }
    const newSection = new Section({
      ...section,
      docId: doc.id,
    })
    await newSection.save()
    doc.sections.push(newSection)
    await doc.save()
    return [newSection, undefined]
  } catch (error) {
    console.error(error)
    return [undefined, error]
  }
}

export const editSection = async (sectionId, newSection) => {
  try {
    const [res, error] = await handle(
      Section.findOneAndUpdate({ id: sectionId }, newSection, { upsert: false })
    )
    if (error) {
      console.error(error)
      return [undefined, error]
    }
    console.log(res)
    return [res, undefined]
  } catch (error) {
    console.error(error)
    return [undefined, error]
  }
}

export const removeSection = async (sectionId) => {
  try {
    const [section, errorFind] = await handle(
      Section.findOneAndRemove({ id: sectionId })
    )
    if (errorFind) {
      console.error(errorFind)
      return [undefined, errorFind]
    }
    const [res, errorUpdate] = await handle(
      Doc.updateOne({ id: section.docId }, { $pull: { sections: section.id } })
    )
    if (errorUpdate) {
      console.error(errorUpdate)
      return [undefined, errorUpdate]
    }
    return [res, undefined]
  } catch (error) {
    console.error(error)
    return [undefined, error]
  }
}

export const getWholeDoc = async (docId = undefined) => {
  try {
    const [doc, error] = await getDoc(docId)
    if (error) {
      console.error(error)
      return [undefined, error]
    }
    const sectionsRequest = []
    doc.sections.forEach((sectionId) =>
      sectionsRequest.push(handle(Section.findById(sectionId)))
    )
    const [res, errorAll] = await handle(Promise.all(sectionsRequest))
    if (errorAll) {
      console.error(errorAll)
      return [undefined, errorAll]
    }
    const sections = []
    res.forEach((result) => {
      if (res) {
        sections.push(result[0])
      }
    })
    doc.sections = sections
    return [doc, undefined]
  } catch (error) {
    console.error(error)
    return [undefined, error]
  }
}
