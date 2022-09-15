import React from 'react';
import CardInfo from './CardInfo'
const Comment = ({post}) => {
    return (
        <div className='h-[200px]'>
            <CardInfo />
            <CardInfo/>
            <CardInfo/>
            <CardInfo/>
        </div>
    );
}

export default Comment;
