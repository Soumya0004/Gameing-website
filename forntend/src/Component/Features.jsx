import React, { Children, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";


const BentoTilt = ({children , className = ''}) => {
  const [transFoemStyle, settransFoemStyle] = useState('')
  const itemref= useRef(null)

  const hsndleMouseMove = (e) => {
    if(!itemref.current)return;

     const {left,top,width,height} = itemref.current.getBoundingClientRect();
    const relativeX=(e.clientX - left) / width;
    const relativeY=(e.clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    settransFoemStyle(newTransform)

  }
  const handleMouseLeave = (e)=>{

   
    settransFoemStyle('')
  }
    
  return (
    <div className={className} ref={itemref} onMouseMove={hsndleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transFoemStyle}}>
      {children}
    </div>
  )
}
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-5 max-w-64 text-xs md:text-base ">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a race and ever-expanding universe where a
            vibrant array of products converge into an interconnection overlay
            experience on the world.
          </p>
        </div>
        <BentoTilt className=" border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform, open-source, and community-driven project that aims to create a decentralized and interoperable metaverse."
          />
        </BentoTilt>

        <div className=" grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">

         <BentoTilt className="bento-tilt_2 row-span-1 md:col-span-1 md:row-span-2 border-hsla">
           <BentoCard src="videos/feature-2.mp4"
           title={<>zig<b>m</b>a</>}
             description="A cross-platform, open-source, and community-driven project that aims to create a decentralized and interoperable metaverse."
           
           />
         </BentoTilt>
         <BentoTilt className="bento-tilt_2 row-span-1 md:col-span-1 ms-23 md:ms-0  border-hsla ">
          
          <BentoCard src="videos/feature-3.mp4"
           title={<>N<b>e</b>xus</>}
             description="A cross-platform, open-source, and community-driven project that aims to create a decentralized and interoperable metaverse."
           
           />
         </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0  w-full   ">
          
          <BentoCard src="videos/feature-4.mp4"
           title={<>az<b>u</b>l</>}
             description="A cross-world AI Agent - eleveting your gameplay to be more fun  and productive."
           
           />
         </BentoTilt>
         
         <BentoTilt className="bento-tilt_2">
          <div  className="flex size-full flex-col justify-center bg-violet-300 p-5  ">
            <h1 className="bento-title special-font  max-w-64 text-black">M<b>o</b>re c<b>o</b>mming s<b>oo</b>n<b>!</b></h1>
            <TiLocationArrow className="m5
             scale-[5] self-end "/> 
          </div>
         </BentoTilt>
       <BentoTilt className=" bento-tilt_2 border-hsla ">
        <video src="videos/feature-5.mp4"
        autoPlay loop muted
        className="size-full object-cover origin-center"/>
       </BentoTilt>
         
        </div>

      </div>
    </section>
  );
};

export default Features;
