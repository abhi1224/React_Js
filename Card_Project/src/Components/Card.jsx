import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data , reference}) {
  return (
    <>
        <motion.div drag dragConstraints = {reference} whileDrag ={{scale:1.2}} className="relative overflow-hidden w-60 h-72 mx-10 bg-zinc-900 rounded-3xl text-white">
           <div className="p-5">
                <FaRegFileAlt />
                <p className='text-sm my-2 leading-tight'>{data.desc}</p>
           </div>
            <div className="absolute bottom-0 w-full ">
                <div className='flex justify-between items-center py-2 px-5 text-lg'>
                    <h5>{data.fileSize}</h5>
                    {data.close ? <IoCloseSharp /> : <LuDownload />}
                    
                </div>
               {data.tag.isOpen && ( 
                    <div
                    className="w-full py-5 flex justify-center items-center" 
                    style={{backgroundColor:data.tag.tagColor ? 'green' : 'blue'}}>
                        <p className="text-lg font-semibold">{data.tag.tagTitle}</p>
                    </div>
                ) }
            </div>
           
        </motion.div>
    </>
  )
}

export default Card