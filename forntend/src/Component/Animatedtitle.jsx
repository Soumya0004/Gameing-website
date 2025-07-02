import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Animatedtitle = ({ title, containerClass }) => {
  const containorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containorRef.current,
          start: "100 center",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });

    }, containorRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containorRef}
      className={`animated-title ${containerClass} text-center text-3xl md:text-5xl lg:text-6xl font-bold`}
    >
      {title.split(" <br/>").map((word, index) => (
        <div
          key={index}
          className="flex justify-center flex-wrap gap-2 px-10 md:gap-3"
        >
          {word.split(" ").map((words, i) => (
            <span
              key={i}
              className="animated-word opacity-0"
              dangerouslySetInnerHTML={{ __html: words }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Animatedtitle;
