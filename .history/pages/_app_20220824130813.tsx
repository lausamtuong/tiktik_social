import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR,setIsSSR] = useState(true);
  useEffect(()=>{
    setIsSSR(false);
  },[])
  if(isSSR) return null;
  return (
  <div>
    <div className='flex gap-6 md:gap-20'>
      <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
        sidebar
      </div>
      <div className='mt-4 flex flex-col gap-10 overflow-aut'></div>
    </div>
    <Component {...pageProps} />
  </div>
    )
}

export default MyApp
