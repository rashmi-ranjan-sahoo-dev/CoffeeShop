
import React from 'react'
import { GiHamburgerMenu , } from 'react-icons/gi'
import { FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = ( { menu,setMenu} ) => {
  return (
   <nav className='absolute top-0 left-0 w-full pt-10 text-white z-[999]'>
     <div className='container'>
        <motion.div
         
        initial={{
            opacity:0,
            y: -100
          }}
          animate = {{
            opacity:1,
            y:0
          }}
          transition={{
             duration: 0.6,
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay:0.2
             }}
        
        className="flex justify-between items-center">
            {/* logo sectih1on */}
            <h1 className='text-2xl font-semibold uppercase sm:ml-30 ml-10'>Coders <span className='text-orange-500'>Coffee.</span></h1>
              {/* menu section */}
              <div onClick={() => setMenu(!menu)}>
               {menu ?<FaTimes className="text-3xl cursor-ponter mr-15" />  :<GiHamburgerMenu className='text-3xl cursor-pointer mr-15' />} 
              </div>
        </motion.div>
     </div>
   </nav>
  )
}

export default Navbar
