import React from 'react';
import axios from 'axios'
import { BASE_URL } from '../../utils';
const Details = () => {
    return (
        <div>
            
        </div>
    );
};

export default Details
export const getServerSideProps = async({params:{id:any}}) =>{
    const data = await axios.get(`${BASE_URL}/api/post/${id}`)  
    return {
        props:{
            postDetails:data
        }
    }
}