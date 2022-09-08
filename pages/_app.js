import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div style={{display: 'flex', alignItems: 'stretch', justifyContent: 'center'}}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
