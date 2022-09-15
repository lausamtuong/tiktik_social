import React from 'react';
import axios from 'axios'
import { BASE_URL } from '../../utils';
import { Video } from '../../types';
interface IProps{
    postDetails:Video
}
const Details = ({postDetails}:IProps) => {
    console.log(postDetails)
    return (
        <div>
            
        </div>
    );
};

export const getServerSideProps = async({params:{id}}:{params:{id:string}}) =>{
   
    const data = await axios.get(`${BASE_URL}/api/post/${id}`)  
    return {
        props:{
            postDetails:data
        }
    }
}
export default Details