import { gql } from '@apollo/client'

const GET_LATEST_SIGNS = gql`
  query getLatestSigns($limit: Int! = 10, $skip: Int! = 0) {
    signs(offset: $skip, limit: $limit, order_by: { created_at: desc }) {
      uuid
      created_at
      content
      nickname
      country
    }
  }
`

export default GET_LATEST_SIGNS
