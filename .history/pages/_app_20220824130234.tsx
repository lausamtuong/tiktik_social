import '../styles/globals.css'
import type { AppProps } from 'next/app'

cót MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
