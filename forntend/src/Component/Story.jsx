import React, { useRef } from "react";
import Animatedtitle from "./Animatedtitle";
import gsap from "gsap";
import RoundedCorner from "./RoundedCorner";
import Bottom from "./Bottom";

const Story = () => {
  const freamRef= useRef(null);
  const handleMouseLeave = () =>{
    const element=freamRef.current;

     gsap.to(element,{
      duration:0.3,
      rotateX:0,
      rotateY:0,
      ease:"power1.inout",

    })
    
  }
  const handleMouseMouve = (e) =>{
    const {clientX,clientY} = e;
    const element=freamRef.current;
    if(!element)return;
    const rect=element.getBoundingClientRect();
    const x= clientX - rect.left;
    const y= clientY - rect.top;
    const centerX= rect.width/2;
    const centerY=rect.height/2;

    const rotateX=((y-centerY)/centerY) * -10;
    const rotateY=((x-centerX)/centerX)*10

    gsap.to(element,{
      duration:0.3,
      rotateX,rotateY,
      transformPerspective:500,
      ease:"power1.inout",

    })

  }
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24 ">
        <p className="text-general text-sm uppercase md:text-[10px]">
          the multiverse ip world
        </p>
        <div className=" relative size-full">
          <Animatedtitle
          title="<b>T</b>he St<b>o</b>ry <br/> <b>o</b>f  a Hi<b>dd</b>en Re<b>al</b>l"
          sectionId="#story"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative  z-10 "
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img src="/img/entrance.webp" alt="entrance" ref={freamRef}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMouve}
                className="object-contain"/>
              </div>
            </div>
      <RoundedCorner/>

          </div>

        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm  text-center  font-circular-web text-violet-50 md:text-start ">
              where realms converge,lies Zentry and the boundless pillar .Discover its secrets and shape your destiny in the realm of Zentry.

            </p>
            <Bottom id="realm-button" title="Discover prologue" containerClass="bg-violet-50 mt-5"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
