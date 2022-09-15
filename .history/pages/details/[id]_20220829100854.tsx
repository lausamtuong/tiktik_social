import React from 'react';
import axios from 'axios'
import { BASE_URL } from '../../utils';
import { Video } from '../../types';
interface IProps{
    postDetails:Video
}
const Details = ({postDetails}:IProps) => {
    return (
        <div>
            
        </div>
    );
};

export default Details
export const getServerSideProps = async({params:{id:any}:{params}}) =>{
    const data = await axios.get(`${BASE_URL}/api/post/${id}`)  
    return {
        props:{
            postDetails:data
        }
    }
}