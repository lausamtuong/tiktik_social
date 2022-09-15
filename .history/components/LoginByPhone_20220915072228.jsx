import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const LoginByPhone = () => {
  const [visible, setVisible] = React.useState(false);
  const [click,setClick] = React.useState(false)
  const [phoneNumber,setPhoneNumber] = React.useState('')
  return (
    <div className="flex flex-col justify-center px-[30px] py-[10px] gap-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[16px]">Phone</p>
        <p className="font-normal text-[12px]">Log in with email or username</p>
      </div>
      <div className="flex rounded-[4px] border  border-gray-200 bg-gray-100   gap-4">
        <div onClick={()=>setClick((prev)=>!prev)} className="cursor-pointer h-[44px] pl-[20px] relative pr-[20px]">
          <div  className="flex items-center gap-4 h-[100%] after:content-[''] after:w-[1px] after:h-[30px]  after:absolute after:right-0 after:bg-gray-300">
            <p>123</p>
            <AiOutlineCaretDown className= {`transition duration-150  ${click?"rotate-180":''}`} />
          </div>
        </div>

        <div className="flex-auto flex items-center">
          <input
            type="text"
            className="border-0 outline-0 bg-transparent w-full "
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="flex rounded-[4px] border  border-gray-200 bg-gray-100   gap-4">
        

        <div className="flex-auto flex items-center">
          <input
            type="text"
            className="border-0 outline-0 bg-transparent w-full pl-5 "
            placeholder="Enter 6-digit code"
          />
        </div>
        <button  className={`bg-white py-[10px] px-[10px] font-semibold ${!phoneNumber?'text-gray-300':''}`}>
        Send Code
      </button>
    </div>
    <div className="">
      <p className="font">Log in with password</p>
    </div>
    </div>
  );
};

export default LoginByPhone;
