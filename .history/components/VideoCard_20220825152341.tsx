import React,{useState,useEffect,useRef} from 'react';
import { Video } from '../types';
import {NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { BsPlay } from 'react-icons/bs';
interface IProps{
    post:Video;
}
const VideoCard:NextPage<IProps> =  ({post}) =>{
    return (
        <div>
            
        </div>
    );
}

export default VideoCard;