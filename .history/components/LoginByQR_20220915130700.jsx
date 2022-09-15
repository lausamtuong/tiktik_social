import React from "react";
import { Image } from "@nextui-org/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineScan } from "react-icons/ai";
import ProgressiveImage from "react-progressive-image";
import { Loading, Grid } from "@nextui-org/react";
const LoginByQR = () => {
  const [visible, setVisible] = React.useState(false);
  const placeholder = (
    <div className="">
      <Loading type="gradient" />
    </div>
  );
  return (
    <div className="flex justify-center px-[30px] py-[10px]">
      <div className="flex flex-col gap-3 pl-[5px]">
        <div className="">
          <Image
            className="cursor-pointer"
            alt="TikTik"
            Layout="responesive"
            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
          />
        </div>
        <div className="">
          <p className="font-normal">
            1. Open the TikTok app on your mobile device
          </p>
          <p className="font-normal flex gap-1 items-center">
            2. On Profile, tap <AiOutlineUserAdd className="font-xl" />{" "}
          </p>

          <p>
            3. Tap
            <AiOutlineScan className="inline mx-[5px]" />
            and scan the QR code to confirm your login
          </p>
        </div>
      </div>
      <div
        className="
            "
      >
        <ProgressiveImage
          delay={300000}
          src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif"
          placeholder=""
        >
          {(src, loading) => {
            return loading ? (
              placeholder
            ) : (
              <Image
                className="cursor-pointer"
                alt="TikTik"
                Layout="responesive"
                src={src}
              />
            );
          }}
        </ProgressiveImage>
        ;
      </div>
    </div>
  );
};

export default LoginByQR;
