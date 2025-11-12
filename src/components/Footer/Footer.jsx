/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook,FaInstagram,FaPhone,FaTelegram,FaGoogle } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import CarditCards from '../../assets/website/credit-cards.webp'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-orange-500 to-orange-900 pt-12 pb-8 text-white'>
      <div className="container">
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* comapny details section */}
            <motion.div
            
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity:1 , y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.6}}
            
            className="space-y-6">
                <h1 className='text-3xl font-bold uppercase'>Coders Cafe</h1>
                <p className='text-sm max-w-[300px]'>A coffee shop is a café that primarily serves coffee, tea, and other beverages, along with light snacks, pastries, and sometimes breakfast or lunch items.</p>
                <div>
                    <p className='flex items-center gap-2'>
                        <FaPhone/>
                        +1 (123) 456-7890
                    </p>
                    <p className='flex items-center gap-2 mt-2'>
                        <FaMapLocation/> Bhubaneswar,Odisha,India
                    </p>
                </div>
            </motion.div>
            {/* footer links section */} 
             <motion.div 
             
              
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity:1 , y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.4, duration: 0.6}}
             
             className="space-y-6">
                <h1 className='text-3xl font-bold'>Quick Links</h1>
                <div className='grid grid-cols-2 '>
                {/* frist column section */}
                <div className='space-y-2'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                {/* second column section */}
                <div  className='space-y-2'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                </div>
             </motion.div>
            {/* social links section */}
             <motion.div 
             
              
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity:1 , y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.6, duration: 0.6}}
             
             className="space-y-6">
                <h1 className='text-3xl font-bold'>
                    Follow Us
                </h1>
                <div className='flex items-center gap-3'>
                    <FaFacebook className='text-3xl hover:scale-105 duration-300' /> <FaInstagram className='text-3xl hover:scale-105 duration-300' /> <FaTelegram className='text-3xl hover:scale-105 duration-300' /> <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
                    <img src={CarditCards} alt="" className='w-[300px] sm:w-[500px]' />
                </div>
             </motion.div>
        </div>
        {/* copyright section */}
        <p className='text-white text-center mt-8 pt-8 border-t-2'>
            Copyright &copy; 2025 .Coders Cafe All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
