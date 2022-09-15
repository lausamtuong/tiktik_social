import '../styles/globals.css'
import type { AppProps } from 'next/app'

cónst MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
