import React from "react";
import Bottom from "./Bottom";

const ContactUs = () => {
  const ImgClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>

      <img src={src} alt="" className=" " />;
    </div>
);
  return (
    <div id="contact" className=" my-20 min-h-96 w-screen px-10">
      <div className=" relative rounded-lg bg-black py-24 text-blue-50 ms:overflow-hidden">
        <div className=" absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
            <ImgClipBox clipClass="contact-clip-path-1"
            src="img/contact-1.webp"/> 
            <ImgClipBox clipClass="contact-clip-path-2 lg:translate-y-40 traslate-y-60"
            src="img/contact-2.webp"/> 
        </div>
         <div className=" absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ">
          <ImgClipBox clipClass=" absolute md:scale-125"
            src="img/swordman-partial.webp"/> 
          <ImgClipBox clipClass=" sword-man-clip-path md:scale-125"
            src="img/swordman.webp"/> 


         </div>
         <div className="flex flex-col items-center text-center ">
            <p className="font-general text-[10px] uppercase ">join Zentry</p>
            <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">Le<b>t</b>'s the <br /> new <b>e</b>ra  <br /> g<b>a</b>ming t<b>o</b>gether</p>
         <Bottom containerClass="mt-10 cursor-pointer bg-blue-50" title="Contact Us" id="contact-us"/>
         </div>
      </div>
    </div>
  );
};

export default ContactUs;
