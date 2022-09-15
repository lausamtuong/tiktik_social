import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR,setIsSSR] = useState(true);
  useEffect(()=>{
    setIsSSR(false);
  },[])
  if(isSSR) return null;
  return (
  <GoogleOAuthProvider cliendId='42521236969-obl0mloan6a21j2dopcui6ugkrt1poit.apps.googleusercontent.com'>
    <Navbar/>
    <div className='flex gap-6 md:gap-20'>
      <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
        <Sidebar/>
      </div>
      <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
    <Component {...pageProps} />
      </div>
    </div>
  </GoogleOAuthProvider>
    )
}

export default MyApp
