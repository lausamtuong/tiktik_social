import React from 'react';
import CardInfo from './CardInfo'
const CommentBox = ({post}) => {
    return (
        <div className='h-[270px] pt-'>
            <CardInfo post={post}/>
            <CardInfo post={post}/>
            <CardInfo post={post}/>
            <CardInfo post={post}/>
            <CardInfo post={post}/>
            <CardInfo post={post}/>
        </div>
    );
}

export default CommentBox;
