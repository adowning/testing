import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost(userId: $userId) {
  insert_posts(objects: {postBody: "test", postTitle: "test", userId: $userId}) {
    affected_rows
  }
`
