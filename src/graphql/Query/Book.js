/* eslint-disable no-unused-vars */
const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const books = async () => {
  try {
    const allBooks = await Book.query()
    return allBooks
  } catch (err) {
    throw new Error('failed to get books')
  }
}

const booksByAuthorId = async (obj, { authorId }, context) => {
  try {
    const booksById = await Book.query().where('authorId', authorId)
    return booksById
  } catch (err) {
    throw new Error('failed to get books by author id')
  }
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findById(publisherId)
  return p
}

const author = async ({ authorId }) => {
  const a = await Author.query().findById(authorId)
  return a
}

const resolver = {
  Query: {
    books,
    booksByAuthorId,
  },
  Book: {
    author,
    publisher,
  },
}

// query books {
//   books {
//     title
//     author {
//       firstName
//     }
//     publisher {
//       company
//     }
//   }
// }
module.exports = resolver
