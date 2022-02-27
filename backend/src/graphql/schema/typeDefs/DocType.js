import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Section {
    sectionId: ID!
    docId: ID!
    header: String
    body: String
  }

  input SectionInput {
    header: String
    body: String
  }

  type Doc {
    sections: [Section]!
  }

  extend type Query {
    getDoc: Doc!
    getSection(sectionId: ID!): Section!
  }

  extend type Mutation {
    addSection(section: SectionInput!): Section!
    editSection(sectionId: ID!, section: SectionInput!): Section!
    removeSection(sectionID: ID!): Boolean
  }
`

export default typeDefs
