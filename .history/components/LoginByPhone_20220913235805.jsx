import React from 'react';
import { Modal} from "@nextui-org/react";
const LoginByPhone = () => {
    return (
        <div>
             <Modal
          width="500px"
          noPadding
          open={visible}
          onClose={closeHandler}
          css={{ maxHeight: "600px" }}
        >
            <Modal.Header
            // css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
            css={{ display: "block" }}
          >
            <div className="flex justify-end p-[10px]">
              {/* <RiCloseFill  onClick={closeHandler} className='text-2xl'/> */}
            </div>
            <div className="flex items-center w-full justify-center  pb-[20px] ">
              <p className="font-bold text-3xl">Log in to TikTok</p>
             
            </div>
          </Modal.Header>
          <Modal.Body className=''>
            <div className="flex items-center flex-col gap-4">
          
          <div className="border-[1px] items-center  border-gray-200 p-[10px] w-[400px] h-[40px] flex">
              {/* <AiOutlineQrcode className='font-bold text-xl'/> */}
              <div className="flex flex-1 justify-center font-semibold">Use QR code</div>
          </div>
          <div className="border-[1px] items-center  border-gray-200 p-[10px] w-[400px] h-[40px] flex">
              {/* <AiOutlineUser className='font-bold text-xl'/> */}
              <div className="flex flex-1 justify-center font-semibold">Use phone / email / username</div>
          </div>
          <GoogleLogin 
              size="large"
              width="400px" 
              onSuccess={(response) => {
                createOrGetUser(response, addUser);
              }}
              onError={() => console.log("error")}
              />
              </div>
              <div className="flex items-center justify-center pb-[10px] gap-1">
                <p className="font-normal">
               {" Don't have an account? "}
              </p>
                    <p className="font-bold text-red-400">Sign Up</p>
              </div>
          </Modal.Body>
          </Modal>
        </div>
    );
}

export default LoginByPhone;
