const Author = require('../../models/Author')

const newAuthor = async (obj, { input }) => {
  const authors = await Author.query().insert({
    firstName: input.firstName,
    lastName: input.lastName,
    age: input.age,
    email: input.email,
    numBooksPublished: input.numBooksPublished,
    addressId: input.addressId,
  }).returning('*')
  return authors
}

const resolver = {
  Mutation: {
    newAuthor,
  },
}

module.exports = resolver
