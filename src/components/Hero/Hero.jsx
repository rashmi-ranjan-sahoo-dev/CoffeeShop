import React, {  useState } from 'react'
import BgImage from '../../assets/bg-slate.png'
import CoffeeMain from '../../assets/black.png'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCoffee, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';


const bgImage = {
    backgroundImage:`url(${BgImage})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat"
}

const Hero = () => {

const [menu,setMenu] = useState(false)

  return (
    <main style={bgImage} className='md:w-screen sm:w-screen' >
      <section className=' relative min-h-[750px] w-full'>
        <div className='container'>
        <motion.div
      whileHover={{ 
        scale: 1.05,
      }}
         whileTap={{ scale: 0.9 }}
         transition={{ type: "spring", stiffness: 100 , duration:0.6,
          damping: 10,
          delay:0.2
          }}
         initial={{
          opacity:0,
          y: -100
        }}
        animate = {{
          opacity:1,
          y:0
        }}
         className="text-8xl text-gray-700 cursor-pointer absolute top-50 left-7"
       >
        <div className='relative sm:right-0 right-6'>
         <FaCoffee />
         </div>
       </motion.div>
            {/* Navbar section */}
            <Navbar menu= {menu} setMenu={setMenu} />
            {/* Hero section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
               <div className='text-orange-100 ml-14 mt-[100px] md:mt-0 p-4 space-y-28'>
                <motion.h1
                
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
                
                className='text-7xl font-bold leading-tight ml-14'>
                    Black Charger
                </motion.h1>
                <motion.div 
                
                initial={{
                  opacity:0,
                  y: 100
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
                
                className='relative sm:top-0 bottom-20'>
                    <div className='relative z-10 space-y-4'>
                        <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                        <h1 className='text-sm opacity-55 leading-loose'>For those who adore coffee, it’s more than just a drink—it’s a ritual, a passion, and a way of life.</h1>
                        <h1 className='text-sm opacity-55 leading-loose'>From the rich aroma of freshly ground beans to the first warm sip, coffee offers comfort, energy, and joy.</h1>
                    </div>
                </motion.div>
                </div> 
                {/* Hero image section */}
                <motion.div

                className='relative sm:top-0 bottom-10'>
                    <motion.img

                    initial = {{
                      opacity:0,
                      scale:0
                    }}
                    animate = {{
                      opacity:1,
                      scale:1
                    }}
                    transition={{
                      type:"spring",
                      stiffness: 100,
                      damping:10,
                      duration:0.6
                    }}

                    viewport={{
                      once:true
                    }}

                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                      rotate: 3,
                    }}
                    whileTap={{
                      scale:0.95
                    }}
                    variants={{hover: {
                      y: -10,
                      filter: "brightness(1.1)",
                      transition: { damping: 10 },
                    },
                  }}

                     src={CoffeeMain} alt=""className='relative z-40 h-[400px] md:h-[700px] img-shadow max-md:hover:scale-100 max-md:active:scale-95 cursor-pointer' />
                    {/* orange circle ring */}
                    <motion.div

                    initial = {{
                      opacity:0,
                      y:100
                    }}
                    animate = {{
                      opacity:1,
                      y:0
                    }}
                    transition={{
                      type:"spring",
                      stiffness: 100,
                      damping:10,
                      duration:0.6
                    }}

                    className='h-[200px] w-[200px] absolute top-24 -right-16 border-orange-500 border-[20px] rounded-full z-10'></motion.div>
                      {/* big text section */}
                    <div className='absolute top-0 sm:left-[200px] z-[1]'>
                     <motion.h1
                     
                      
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
                     
                     className=' text-[65px] sm:text-[140px] scale-150 font-bold text-gray-700 leading-none'>Black Charger</motion.h1>
                     </div>
                </motion.div>
            </div>
        </div>
        {/* sidebar menu section */}
        <div className={`${menu ? 'absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-orange-800 to-orange-300 backdrop-blur-sm z-10' : 'hidden'}`}>
          <div className='w-full h-full flex flex-col justify-center items-center  gap-6 text-white'>
            {/* line */}
            <div className='w-[1px] h-[70px] bg-white'></div>
              {/* social icons */}
              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'><FaFacebook className='text-2xl' /></div>
              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'><FaTwitter className='text-2xl' /></div>
              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'> <FaInstagram className='text-2xl'/></div>
            <div className='w-[1px] h-[70px] bg-white'></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
