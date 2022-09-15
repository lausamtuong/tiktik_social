import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR,setIs]
  return <Component {...pageProps} />
}

export default MyApp
