import '../styles/globals.css'
import type { AppProps } from 'next/app'

cónt MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
