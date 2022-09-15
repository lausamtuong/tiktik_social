import React from 'react';
import UserComment from './UserComment'
const CommentBox = ({post}) => {
    return (
        <div className='h-[270px] pt-[20px] '>
            <UserComment post={post}/>
            <UserComment post={post}/>
            <UserComment post={post}/>
            <UserComment post={post}/>
            <UserComment post={post}/>
            <UserComment post={post}/>
        </div>
    );
}

export default CommentBox;
