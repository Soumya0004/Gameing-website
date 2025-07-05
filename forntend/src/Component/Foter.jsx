import React from "react";
import {FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const links = [
    {href:'https://github.com',icon:<FaGithub/>},
    {href:'https://facebook.com',icon:<FaFacebook/>},
    {href:'https://twitter.com',icon:<FaTwitter/>},
    {href:'https://instagram.com',icon:<FaInstagram/>},

]

const Foter = () => {
  return (
    <div className="w-screen bg-violet-300 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-10 md:flex-row">
        <p className="text-center text-sm  md:text-left font-semibold ">
            &copy; 2025 Zentry. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start ">
            {links.map((link,index)=>(
                <a href={link.href} key={index} target="_blank" rel="noopener noreferrer" className=" text-black transition-colors duration-300 hover:text-white ease-in-out text-2xl">
                    {link.icon}
                </a>
            ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right  font-semibold">Privacy policy</a>
      </div>
    </div>
  );
};

export default Foter;
