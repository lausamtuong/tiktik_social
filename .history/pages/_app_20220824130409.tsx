import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR,setIsSSR] = useState(true);
  useEf
  return <Component {...pageProps} />
}

export default MyApp
