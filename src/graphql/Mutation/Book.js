/* eslint-disable no-unused-vars */
const Book = require('../../models/Author')

const newBook = async (obj, { input }, context) => {
  try {
    const books = await Book.query().insert({
      title: input.title,
      language: input.language,
      numPages: input.numPages,
      datePublished: input.datePublished,
      bestseller: input.bestseller,
      authorId: input.authorId,
      publisherId: input.publisherId,
    }).returning('*')
    return books
  } catch (err) {
    throw new Error('Failed to add your book')
  }
}

const removeBook = async ({ bookId }) => {
  const books = await Book.query().findById(bookId).delete()
  return books
}

const resolver = {
  Mutation: {
    newBook,
    removeBook,
  },
}

module.exports = resolver
