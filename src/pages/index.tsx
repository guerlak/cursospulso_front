import { GetStaticProps } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"
import SectionOneComponent from '../components/SectionOne/SectionOne'


import client from '../graphql/client'
import GET_HOMEPAGE from '../graphql/queries/getHomePage'
import { HomePageProps } from '../types/api'

const Index = ({ SectionOne }: HomePageProps) => {

  return (
    <>
      <Head>
        <title>Cursos Pulso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <SectionOneComponent sectionOne={SectionOne} />
        <Footer />
      </div>
    </>
  )
}



export const getStaticProps: GetStaticProps = async () => {

  const { homePage } = await client.request(GET_HOMEPAGE);

  return {
    props: {
      ...homePage
    }
  }
}

export default Index;



