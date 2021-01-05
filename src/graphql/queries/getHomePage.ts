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
  
  fragment sectionHero on HomePage{
    SectionHero{
      Image{
        url
      }
      text
    }
  }

  query GET_HOMEPAGE{
    homePage{
      ...sectionHero
      ...sectionOne
      }
  }
`
export default GET_HOMEPAGE;