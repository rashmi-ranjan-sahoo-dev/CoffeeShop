import React from 'react'
import worldMap from "../../assets/world-map.png"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const WhereToBuy = () => {
  return (
    <div className='container my-16'>
      <div className='relative sm:right-0 right-6 grid grid-cols-1 sm:grid-cols-3 gap-8 place-content-center'>
        {/* from section */}
        <div className=' mt-5 ml-20 space-y-8'>
           <motion.h1
           
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{ delay:0.2,duration:0.5}}
           
           className='text-4xl font-bold text-darkGray font-serif'>Buy out products from anywhere</motion.h1>
           <motion.div
           
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{ delay:0.4,duration:0.5}}
           
           className='flex itmes-center gap-4'>
            <input type="text" placeholder='Name' className='input-style w-full lg:w-[150px]' />
            <input type="email" placeholder='Email' className='input-style w-full lg:w-[300px]' />
           </motion.div>
           <motion.div
           
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{ delay:0.6,duration:0.5}}
           
           className='flex itmes-center gap-4'>
            <input type="tel" placeholder='Number' className='input-style w-full lg:w-[200px]' />
            <textarea type="text" placeholder='Address' className='input-style w-full lg:w-[250px]' />
           </motion.div>
           <motion.button
           
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{ delay:0.8,duration:0.5}}
           
           className='primary-btn cursor-pointer active:scale-97 w-full'>Order Now</motion.button>
        </div>
        {/* world map section */}
        <div className='col-span-2'>
            <motion.img src={worldMap}
            
            initial={{ opacity:0, scale: 0.5 }}
            whileInView={{opacity:1,scale: 1}}
            transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:1
            }}
            
            alt="" className='w-full sm:w-[700px] mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default WhereToBuy
