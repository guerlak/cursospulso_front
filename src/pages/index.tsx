import { GetStaticProps } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"


import client from '../graphql/client'
import GET_HOMEPAGE from '../graphql/queries/getHomePage'

const Index = () => (
  <>
    <Head>
      <title>Cursos Pulso</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Header />

      <Footer />
    </div>
  </>
)



export const getStaticProps: GetStaticProps = async () => {

  const { homePage } = await client.request(GET_HOMEPAGE);

  console.log(homePage);
  return {
    props: {
      ...homePage
    }
  }
}

export default Index;



