import React from 'react'
import BannerImg from '../../assets/coffee-cover.jpg';
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png'
import {motion} from "framer-motion";


const BannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize:'cover',
    backgroundPosition:"center",
    backgroundRepeat: 'no-repeat',
    height:"100%",
    width:"100%"
}

const AppBanner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
            <div className='sm:ml-0 ml-14'>
                <div className="space-y-6 max-w-xl mx-auto mr-20">
                    <motion.h1
                    
                    initial={{opacity:0, y: 100}}
                    whileInView={{ opacity:1, y: 0}}
                    transition={{
                        type:"spring",
                        stiffness:100,
                        damping: 10,
                        delay:0.2,
                    }}
                    
                    className='text-2xl text-center sm:text-4sl font-semibold'>Download the app</motion.h1>
                    <motion.p 
                    
                    initial={{opacity:0, y: 100}}
                    whileInView={{ opacity:1, y: 0}}
                    transition={{
                        type:"spring",
                        stiffness:100,
                        damping: 10,
                        delay:0.3,
                    }}
                    
                    className='text-center sm:px-20'>A coffee shop is a café that primarily serves coffee, tea, and other beverages, along with light snacks, pastries, and sometimes breakfast or lunch items.</motion.p>
                    {/* image link */}
                    <motion.div
                    
                    className='flex justify-center items-center gap-4'>
                        <a href="#">
                            <motion.img
                            
                            initial={{opacity:0, y: 100}}
                            whileInView={{ opacity:1, y: 0}}
                            transition={{
                                type:"spring",
                                stiffness:100,
                                damping: 10,
                                delay:0.4,
                            }}
                            
                            src={AppStoreImg}
                             className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                            alt="" />
                        </a>
                        <a href="#">
                            <motion.img
                            
                            initial={{opacity:0, y: 100}}
                            whileInView={{ opacity:1, y: 0}}
                            transition={{
                                type:"spring",
                                stiffness:100,
                                damping: 10,
                                delay:0.5,
                            }}

                            src={PlayStoreImg}
                             className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'  alt="" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner
