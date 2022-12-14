import { SanityAssetDocument } from "@sanity/client";
import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { client } from "../utils/client";
const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wrongFile, setWrongFile] = useState(false);
  const [video, setVideo] = useState<SanityAssetDocument|undefined>();
  const uploadVideo = async(e:any)=>{
    setIsLoading(true)
      const selectedFile = e.target.files[0];
      const fileTypes = ['video/mp4','video/webm']
      if(fileTypes.includes(selectedFile.type)){
        client.assets.upload('file',selectedFile,{
          contentType:selectedFile.type,
          filename:selectedFile.name
        }).then((data)=>{
         
          setVideo(data)
          setIsLoading(false)
          setWrongFile(false)
        })
      }
      else{
        setIsLoading(false)
        setWrongFile(true)
      }
  }
  return (      
    <div className="flex w-full h-full absolute left-0 top-[60px] mb-10 pt-10 lg:pt-20  justify-center">
      <div className="bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap items-center justify-center p-14 pt-6">
        <div className="">
          <div className="">
            <p className="text-2xl font-bold">Upload video</p>
            <p className="text-md text-gray-400">Post a video</p>
          </div>
          <div
            className="border-dashed rounded-xl border-4 border-gray-200
                     flex flex-col justify-center items-center outline-none mt-10 w-[260px]
                     h-[460px] p-2 cursor-pointer hover:border-red-300 hover:bg-gray-100"
          >
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="">
                {video ? (
                  <div className="">
                    <video
                    loop
                    controls
                    src={video.url}
                    className='rounded-xl h-[450px]  bg-black'
                    ></video>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                        </p>
                        <p className="font-semibold text-xl"> Upload video</p>
                      </div>
                      <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                        MP4 or WebM or ogg <br />
                        720x1280 resolution or higher <br />
                        Up to 10 minutes <br />
                        Less than 2 GB
                      </p>
                      <p className='bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                        Select file
                      </p>
                    </div>
                    <input
                      type='file'
                      name='upload-video'
                      onChange={(e) => uploadVideo(e)}
                      className='w-0 h-0'
                    />
                  </label>
                )}
                {wrongFile&&(
                  <p className='font-semibold text-red-400 text-center text-xl mt-4 w-[250px]'>
                    Please select a video file
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
          <div className="flex flex-col gap-3 pb-10">
            <label htmlFor="" className='text-md font-medium'>Caption</label>
            <input
            type='text'
            //value={caption}
            //onChange={(e) => setCaption(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
            <label className='text-md font-medium '>Choose a topic</label>
            <select
            onChange={(e) => {
             // setTopic(e.target.value);
            }}
            className='outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer'
          >
            {/* {topics.map((item) => (
              <option
                key={item.name}
                className=' outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300'
                value={item.name}
              >
                {item.name}
              </option>
            ))} */}
          </select>
          <div className='flex gap-6 mt-10'>
            <button
              onClick={handleDiscard}
              type='button'
              className='border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
            >
              Discard
            </button>
            <button
              //disabled={videoAsset?.url ? false : true}
              onClick={handlePost}
              type='button'
              className='bg-[#F51997] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
            >
              {savingPost ? 'Posting...' : 'Post'}
            </button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Upload;
