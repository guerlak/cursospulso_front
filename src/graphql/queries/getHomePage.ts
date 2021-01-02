import { gql } from 'graphql-request'

const GET_HOMEPAGE = gql`
    {
        homePage{
          SectionOne{
            Texto
          }
        }
      }
`
export default GET_HOMEPAGE;