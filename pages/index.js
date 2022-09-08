import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>216 Heavy Haul Ltd.</title>
        <meta name="description" content="216 Heavy Haul Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to 216 Heavy Haul</h1>
        <h2>We do the Tough Jobs</h2>
        <div className={styles.photo}>
          <Image src="/crane2.jpg" width={1920} height={712}/>
        </div>

        <h2>Remote Access Specialists - We Will Get There!</h2>
      </main>
    </div>
  )
}
