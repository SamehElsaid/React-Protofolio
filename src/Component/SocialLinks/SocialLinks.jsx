import React, { memo } from 'react';
import { SiGmail } from "react-icons/si"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import {FaLinkedinIn,FaFacebookF} from "react-icons/fa"
const SocialLinks = memo(() => {
    return (
        <div>
            <ul className=" items-center gap-5 flex flex-wrap">
                <a href='https://www.facebook.com/profile.php?id=100006920683098' target="_blank"  rel="noreferrer" className="capitalize text-[20px]  w-9 h-9 flex items-center justify-center bg-blue-800 text-white rounded-full hover:bg-white cursor-pointer duration-500 hover:text-blue-800 ">
                    <FaFacebookF />
                </a>
                <a href='https://github.com/samehElsaid' target="_blank"  rel="noreferrer" className="capitalize  text-[20px]  w-9 h-9 flex items-center justify-center text-white bg-black rounded-full  hover:bg-white cursor-pointer duration-500 hover:text-black">
                    <FiGithub />
                </a>
                <a href='https://contacts.google.com/person/c3734090081087120487?hl=en' target="_blank"  rel="noreferrer" className="capitalize  text-[20px]  w-9 h-9 flex items-center justify-center bg-orange-500 text-white rounded-full   hover:bg-white cursor-pointer duration-500 hover:text-orange-500">
                    <SiGmail />
                </a>
                <a href='https://api.whatsapp.com/send/?phone=01558290662&text&type=phone_number&app_absent=0' target="_blank"  rel="noreferrer" className="capitalize text-white text-[20px]  w-9 h-9 flex items-center justify-center bg-green-700 rounded-full  hover:bg-white cursor-pointer duration-500 hover:text-green-700 ">
                    <AiOutlineWhatsApp />
                </a>
                <a href='https://www.linkedin.com/in/sameh-elsaid-elmeligy/' target="_blank"  rel="noreferrer" className="capitalize text-white text-[20px]  w-9 h-9 flex items-center justify-center bg-blue-600 rounded-full  hover:bg-white cursor-pointer duration-500 hover:text-blue-600 ">
                    <FaLinkedinIn />
                </a>
            </ul>
        </div>
    );
});

export default SocialLinks;