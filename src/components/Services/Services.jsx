import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import coffee1 from "../../assets/coffee/coffee1.png"
import coffee3 from "../../assets/coffee/coffee3.png"


const servicesData = [
    {
        id:1,
        image:coffee1,
        title: "Black Coffee",
        subtitle:"Black coffee is a simple yet powerful beverage made by brewing coffee beans without any added milk, sugar, or cream."
    },
    {
        id:2,
        image:coffee3,
        title:"Hot Coffee",
        subtitle:"Hot coffee is a widely enjoyed beverage made by brewing roasted coffee beans with hot water. It can be served black or with added milk, sugar, or flavors to suit personal taste"
    },
    {
        id:3,
        image:coffee1,
        title:"Cold Coffee",
        subtitle:"Cold coffee is a refreshing beverage made by blending or brewing coffee and serving it chilled. It can be prepared in different styles, such as iced coffee, cold brew, or frappe, often mixed with milk, sugar, or flavors like chocolate and vanilla."
    }
]

// const cardVariants = {
//    hidden:{opacity:0, y:20},
//    visible:{
//       opacity:1,
//       y:0,
//       transition:{
//          type:"spring",
//          stiffness: 150,
//          damping:10,
//          ease:"easeInOut",
//       },
//    },
// };

const containerVariants = {
   hidden:{opacity: 1},
   visible:{
      opacity:1,
      transition:{
         delay:0.6,
         staggerChildern:0.4,
      },
   },
}

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
      {/* header section */}
       <div className="text-center max-w-lg mx-auto space-y-2">
         <motion.h1
         
         initial = {{
            opacity:0,
            y:100
         }}
        //  animate = {{
        //     opacity:1,
        //     y:0
        //  }}
         whileInView={{
            opacity:1,
            y:0
         }}
         viewport={{once:true}}
         transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.2
         }}
         
         className='text-3xl font-bold text-ligthGray'>
            Fresh and <span className='text-orange-500'>Testy Coffee</span>
         </motion.h1>
         <motion.p 
         
         initial = {{
            opacity:0,
            scale:0.5
         }}
         whileInView={{
            opacity:1,
            scale:1
         }}
         viewport={{once:true}}
         transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.6
         }}
         
         className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque quia laudantium. Quis eum molestias laboriosam maiores corrupti, unde fugit repellendus aliquam dicta. In sed dolorem, minima vel nostrum placeat.</motion.p>
       </div>
       {/* card section */}
        <motion.div
        
        variants={containerVariants}
        initial="hidden"
        whileInView={"visuble"}
        viewport={{ amount:0.8}}
        
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {servicesData.map((servece)=>(
            <motion.div key={servece.id}

            initial={{opacity:0,y:90}}
            whileInView={{opacity:1,y:0}}
            transition={{
               duration:0.6,
               delay:0.3, 
               type:"spring",
               stiffness:100,
               damping:10,}}

            className='text-center p-4 space-y-6'>
                <motion.img src={servece.image} 
                
                whileHover={{
                  scale:1.1,
                  transition:{duration:0.3}
                }}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}

                alt="" className='' />
                <div className='space-y-2'>
                <h2 className='text-2xl font-bold text-orange-500'>{servece.title}</h2>
                <p className='text-sm opacity-70'>{servece.subtitle}</p>
                </div>
            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}

export default Services
