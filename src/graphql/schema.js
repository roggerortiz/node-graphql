import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typesDef = `
    type Query {
        getUsers: [User]
    }

    type User {
        _id: ID,
        firstName: String!
        lastName: String!,
        age: Int
    }

    type Mutation {
        createUser(input: UserInput!): User,
        updateUser(_id: ID, input: UserInput!): User,
        deleteUser(_id: ID): User
    }

    input UserInput {
        firstName: String!,
        lastName: String!,
        age: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typesDef,
    resolvers: resolvers
})