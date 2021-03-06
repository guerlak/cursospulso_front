import { GetStaticProps } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"
import SectionConteudoProg from '../components/SectionConteudoProg/SectionConteudoProg'
import SectionForm from '../components/SectionForm/Form'
import SectionHeroComponent from '../components/SectionHero/SectionHero'
import SectionOneComponent from '../components/SectionOne/SectionOne'
import SectionQuemSomos from '../components/SectionQuemSomos'

import client from '../graphql/client'
import GET_HOMEPAGE from '../graphql/queries/getHomePage'
import { HomePageProps } from '../types/api'

const Index = ({ SectionOne, SectionHero }: HomePageProps) => {

  return (
    <>
      <Head>
        <title>Home-Cursos Pulso</title>
      </Head>
      <div>
        <Header />
        {!!SectionHero && <SectionHeroComponent sectionHero={SectionHero} />}
        <main>
          {!!SectionOne && <SectionOneComponent sectionOne={SectionOne} />}
          <SectionQuemSomos />
          <SectionConteudoProg />
          <SectionForm />
        </main>
        <Footer />
      </div>
    </>
  )
}



export const getStaticProps: GetStaticProps = async () => {

  let data = {}
  try {
    const { homePage } = await client.request(GET_HOMEPAGE);
    data = homePage;

  } catch (e) {
    console.log("error on request")
  }
  return {
    props: {
      ...data
    }
  }
}

export default Index;



