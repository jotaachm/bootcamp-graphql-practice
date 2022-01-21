const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query { 
    welcome: String!
    authors: [Author!]!
    books: [Book!]!
    authorById(id: ID!): Author!
    booksByAuthorId(id: ID!): Book!
    publisherById(id: ID!): Publisher!
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: String!
    email: String!
    numBooksPublished: Int!
    address: Address
    books: [Book!]
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int 
    addressId: ID!
    books: [Book!]
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Mutation {
    newBook(input: newBookInput!): Book!
    newAuthor(input: newAuthorInput!): Author!
    removeBook(bookId: ID!): Book!
  }

  input newBookInput {
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
  }

  input newAuthorInput {
    firstName: String!
    lastName: String!
    age: String!
    email: String!
    numBooksPublished: Int!
    addressId: ID
  }

`
