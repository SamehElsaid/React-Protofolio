import React, { memo } from 'react';
import "./Project.css"
import {motion} from "framer-motion"
const Project = memo(({ data }) => {
    return (
        <motion.div className='Project'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.3}}
        layout
        >
            {data && <motion.div initial={{opacity:0,scale:0}} viewport={{once:true}} whileInView={{opacity:1,scale:1 }}  transition={{duration:.4}} className=''>
                <h2 className='text-white center text-xl mb-4 '>{data.name}</h2>
                <div className="imgHover relative overflow-hidden">
                    <span className='relative  flex overflow-hidden'>
                        <img className='w-full  h-full' src={data.img} onLoad={(e) => {
                            e.target.parentElement.querySelector(".loadCon").remove()
                            e.target.parentElement.querySelector(".loadConimg").remove()
                        }
                        }
                            onError={(e) => { e.target.remove() }}
                            alt="" />
                        <img src="./img/40-BEST-WEBSITE-DESIGNS-2022.png " className='opacity-0 loadConimg' alt="" />
                        <div className="loadCon  absolute top-0 left-0 w-full h-full bg-[#0b1218]">
                            <div className="">
                                <div className="item item-1"></div>
                                <div className="item item-2"></div>
                                <div className="item item-3"></div>
                                <div className="item item-4"></div>
                            </div>
                        </div>
                    </span>
                    <div className="z-20 absolute flex items-center justify-center px-2 pb-7  productHover ">
                        <div className="pt-4">
                            <h2 className=' text-[#ea4343] mb-2 font-bold'>With</h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {data.used.map(ele => <span key={Math.random()} className='text-white w-fit'>-{ele} </span>)}
                            </div>
                        </div>
                    </div>
                    <div className=" z-20 absolute productHover flex items-end justify-center pb-2 ">
                        <div className="flex gap-3 justify-center button-90">
                            <a target="_blank" className='button-92' href={data.github} rel="noreferrer">Github</a>
                            <a target="_blank" className='button-92' href={data.live} rel="noreferrer">Live</a>
                        </div>
                    </div>
                </div>
            </motion.div>}

        </motion.div>
    );
});

export default Project;