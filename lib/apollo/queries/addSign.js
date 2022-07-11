import { gql } from '@apollo/client'

const ADD_SIGN = gql`
  mutation ($nickname: String!, $content: String!, $country: String) {
    addSign(nickname: $nickname, content: $content, country: $country) {
      uuid
    }
  }
`

export default ADD_SIGN
