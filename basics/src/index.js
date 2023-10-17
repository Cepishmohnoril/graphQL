import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

const resolvers = {
    Query: {
        hello() {
            return 'Hello Space Coweboy!'
        },
        name() {
            return 'Космічний Ковбой'
        },
        location() {
            return 'Космоос'
        },
        bio() {
            return 'Подорожую, полюю на космічних піратів'
        },
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
})

server.start(() => {
    console.log('It`s alive!')
})