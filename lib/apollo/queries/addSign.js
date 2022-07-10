import { gql } from '@apollo/client'

const ADD_SIGN = gql`
  mutation insertNewSign(
    $nickname: String!
    $content: String!
    $country: String
  ) {
    insert_sign(
      objects: { nickname: $nickname, country: $country, content: $content }
    ) {
      return {
        uuid
      }
    }
  }
`

export default ADD_SIGN
