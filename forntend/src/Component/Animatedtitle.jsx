import React, {  useEffect, useRef } from 'react'
import gsap from "gsap";

const Animatedtitle = ({title , containerClass}) => {
    const containorRef= useRef(null);

useEffect(()=>{
const ctx = gsap.context(() => {
const titleAnimation = gsap.timeline({
    scrollTrigger:{
        trigger: containorRef.current,
        start: "100 center",
        end: "center bottom",
        toggleActions: "play none none reverse",
    }
})

}, containorRef);
},[])
  return (
    
         <div ref={containorRef} className={ `animated-title ${containerClass} text-center text-3xl md:text-5xl lg:text-6xl font-bold`}>

            {title.split(" <br/>").map((word, index) => (
              <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">{word.split(' ').map((words ,i)=>{
                <span key={i} className='animated-word' dangerouslySetInnerHTML={{__html: words}}/>
              })}</div>
            ))}
        </div>
       
    
  )
}

export default Animatedtitle