import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Social from "../components/Social"

export default function Home(){
  return (
    <>
      <Head>
        <title>Cursos Pulso</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
            rel="preload"
            href="/fonts/HeroNew-Bold.otf"
            as="font"
            crossOrigin=""
          /> */}
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <Social/>
        </div>
        <main className={styles.main}>
          <img src="/images/cursospulso_logo_vertical_branco.png" className={styles.logoMobile}/>
          <img src="/images/cursospulso_logo_horizontal_branco.png" width={500} className={styles.logo}/>
          <h1>
            Um novo curso está surgindo pra você. 
          </h1>
        </main>
      </div>
    </>
  )
}
