import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div style={{display: 'flex', alignItems: 'stretch', justifyContent: 'center'}}>
        <Component {...pageProps} />
      </div>
      <footer className='footer'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className='logo'>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default MyApp
