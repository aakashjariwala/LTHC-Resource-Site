import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Section {
    _id: ID!
    docId: ID!
    label: String!
    header: String
    body: String
    subsections: [Section]
  }

  input SectionInput {
    label: String!
    header: String
    body: String
    subsections: [SectionInput]
  }

  type SectionResponse implements BaseResponse {
    success: Boolean!
    data: Section
    error: Int
    errorMessage: String
  }

  type Doc {
    sections: [Section]!
  }

  type DocResponse implements BaseResponse {
    success: Boolean!
    data: Doc
    error: Int
    errorMessage: String
  }

  extend type Query {
    getDoc: DocResponse!
  }

  extend type Mutation {
    addSection(section: SectionInput!, docId: ID): SectionResponse!
    editSection(sectionId: ID!, section: SectionInput!): SectionResponse!
    removeSection(sectionId: ID!): SimpleResponse!
  }
`

export default typeDefs
