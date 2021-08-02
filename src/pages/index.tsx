import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Footer from '../components/Footer'
import Header from "../components/Header"
import SectionConteudoProg from '../components/SectionConteudoProg/SectionConteudoProg'
import SectionForm from '../components/SectionForm/Form'
import SectionHeroComponent from '../components/SectionHero/SectionHero'
import SectionOneComponent from '../components/SectionOne/SectionOne'
import SectionQuemSomos from '../components/SectionQuemSomos'

import client from '../graphql/client'
import GET_HOMEPAGE from '../graphql/queries/getHomePage'
import { HomePageProps } from '../types/api'

const Index = ({ SectionOne, SectionHero }: HomePageProps, props: any) => {

  const quemSomos = useRef(null);
  const footer = useRef(null);
  const quemSomosHandler = () => quemSomos.current.scrollIntoView();
  const footerHandler = () => footer.current.scrollIntoView();

  return (
    <>
      <Head>
        <title>Home | Cursos Pulso</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* {!!SectionHero && <SectionHeroComponent sectionHero={SectionHero} />} */}

      <SectionHeroComponent sectionHero={SectionHero} />
      <main>
        {!!SectionOne && <SectionOneComponent sectionOne={SectionOne} />}
        <SectionQuemSomos tagRef={quemSomos} />
        <SectionConteudoProg />
        {/* <SectionForm /> */}
      </main>
      <Footer tagRef={footer} />
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {

//   let data = {}
//   try {
//     const { homePage } = await client.request(GET_HOMEPAGE);
//     data = homePage;

//   } catch (e) {
//     console.log("Error on request...")
//   }
//   return {
//     props: {
//       ...data
//     }
//   }
// }

export default Index;



