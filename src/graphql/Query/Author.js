/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const authors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('failed to get authors')
  }
}

const authorById = async (obj, { id }, context) => {
  const a = await Author.query().findOne('id', id)
  return a
}

const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const address = async ({ addressId }, params, context) => {
  const ad = await Address.query().findOne('id', addressId)
  console.log(ad)
  return ad
}

// query authors {
//   authors{
// 		address {
//       id
//     }
//   }
// }

const resolver = {
  Query: {
    authors,
    authorById,
  },
  Author: {
    books,
    address,
  },
}

module.exports = resolver

/* graphQL playground:

query authors {
    authors {
        firstName
        lastName
        email
        books {
            title,
            language,
            numPages
        }
    }

query authorById($id: ID!) {
  authorById(id: $id) {
    firstName
    lastName
    email
    books {
      title,
      language,
      numPages,
    }
  }
}
 } */
