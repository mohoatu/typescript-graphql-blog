import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String
    published: Boolean!
    author: User!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String, authorId: ID!): Post!
    publishPost(id: ID!): Post!
    deletePost(id: ID!): Post
  }
`;