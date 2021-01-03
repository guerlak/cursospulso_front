import { gql } from 'graphql-request'

const GET_HOMEPAGE = gql`
  fragment sectionOne on HomePage{
    SectionOne{
      Texto
      Imagem{
        url
      }
    }  
  }

  query GET_HOMEPAGE{
    homePage{
      ...sectionOne
      }
  }
`
export default GET_HOMEPAGE;