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
        })
      }
      else{
        setIsLoading(false)
        setWrongFile(true)
      }
  }
  return (      
    <div className="flex w-full h-full">
      <div className="bg-white rounded-lg">
        <div className="">
          <div className="">
            <p className="text-2xl font-bold">Upload video</p>
            <p className="text-md text-gray-400">Post a video</p>
          </div>
          <div
            className="border-dashed rounded-xl border-4 border-gray-200
                     flex flex-col justify-center items-center outline-none mt-10 w-[260px]
                     h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
