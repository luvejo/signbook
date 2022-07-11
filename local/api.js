const { ApolloServer, gql } = require('apollo-server')
const { signs } = require('./data')

const typeDefs = gql`
  type Sign {
    uuid: String
    created_at: String
    content: String
    nickname: String
    country: String
  }

  enum Sort {
    asc
    desc
  }

  input OrderBy {
    created_at: Sort
  }

  type Query {
    signs(offset: Int, limit: Int, skip: Int, order_by: OrderBy): [Sign]
  }

  type Mutation {
    addSign(nickname: String!, content: String!, country: String): Sign!
  }
`

const resolvers = {
  Query: {
    signs() {
      return signs
    },
  },

  Mutation: {
    addSign(_, { nickname, content, country }) {
      const uuid = String(Math.random())

      signs.push({
        uuid,
        created_at: 'just now',
        nickname,
        content,
        country,
      })

      return uuid
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
