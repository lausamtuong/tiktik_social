import React, { useState, useEffect } from "react";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState();
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
                  <div className=""></div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        p.
                      </div>
                    </div>
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
