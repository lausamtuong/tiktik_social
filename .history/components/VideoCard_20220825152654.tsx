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
        <div className='flex flex-col border-b-2 border-gray-200 pb-6 '>
            <div className=''>
                <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
                    <div className="md:w-16 md:h-16 w-10 h-10">
                        <Link href='/'>
                            <>
                            <Image width={62}
                            height={62}
                            className='rounded-full'
                            sr}
                            />
                            </>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default VideoCard;