import type { NextPage } from 'next'
import axios from 'axios'
import {Video} from '../types'
interface IProps{
  videos:Video[];
}
const Home = ({videos}:IProps) => {
  
  return (
    <div className="flex flex-col gap-10 videos h-full">
     {videos.length?(
      videos.map((video:Video)=>(
        
      )

      )
     ):()}
    </div>
  )
}
export const getServerSideProps = async()=>{
  const {data} = await axios.get(`http://localhost:3000/api/post`)
 
  return {
    props:{
      videos:data
    }
  }
}
export default Home
