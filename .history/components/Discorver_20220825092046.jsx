import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import {topics} from '../utils/constants'
const Discorver = () => {
    return (
        <div className=' xl:border-b-2 xl:boerder-grey-200 pb-6'>
           <p className='text-gray-500'>Popular Topics</p> 
        </div>
    );
}

export default Discorver;
