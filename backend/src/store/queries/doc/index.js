import handle from '../../../util/handle'
import { Doc, Section } from '../../schema'

export const getDoc = async (docId = undefined) => {
  // default to first one
  const [res, error] = await handle(Doc.findOne(docId ? { id: docId } : {}))
  if (error) {
    console.error(error)
    return [undefined, error]
  }
  return [res, undefined]
}

export const createDoc = async () => {
  try {
    const doc = new Doc()
    await doc.save()
    return [doc, undefined]
  } catch (error) {
    return [undefined, error]
  }
}

export const getSection = async (sectionId) => {
  const [res, error] = await handle(Section.findOneById(sectionId))
  if (error) {
    console.error(error)
    return [undefined, error]
  }
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
    newSection.save()
    doc.sections.push(section)
    doc.save()
  } catch (error) {
    return [undefined, error]
  }
}

export const editSection = async (sectionId, newSection) => {
  try {
    const [res, error] = await handle(
      Section.updateOne({ id: sectionId }, newSection, { upsert: false })
    )
    if (error) {
      console.error(error)
      return [undefined, error]
    }
    return [res, undefined]
  } catch (error) {
    return [false, error]
  }
}

export const removeSection = async (sectionId) => {
  try {
    const [section, errorFind] = await getSection(sectionId)
    if (errorFind) {
      console.error(errorFind)
      return [false, errorFind]
    }
    const [res, errorUpdate] = await handle(
      Doc.updateOne(
        { id: section.docId },
        { $pull: { sections: { id: section.id } } }
      )
    )
    if (errorUpdate) {
      console.error(errorUpdate)
      return [false, errorUpdate]
    }
    return [res, undefined]
  } catch (error) {
    return [false, error]
  }
}

export const getWholeDoc = async (docId = undefined) => {
  const [doc, error] = await getDoc(docId)
  if (error) {
    console.error(error)
    return [undefined, error]
  }
  const sectionsRequest = []
  doc.sections.map((sectionId) =>
    sectionsRequest.push(handle(Section.findById(sectionId)))
  )
  const [res, errorAll] = handle(Promise.all(sectionsRequest))
  if (errorAll) {
    console.error(errorAll)
    return [undefined, errorAll]
  }
  const sections = []
  res.map((section) => sections.push(section))
  doc.sections = sections
  return [doc, undefined]
}
