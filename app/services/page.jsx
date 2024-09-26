"use client"


import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
    {
        num: '01',
        title: "Front-End Development",
        description: 'Offering custom front-end development services, I bring your design vision to life with clean, optimized code using HTML, CSS, JavaScript, and React.',
        href: ''
    },
    {
        num: '02',
        title: "Responsive Web Design",
        description: "I specialize in creating responsive websites that adapt seamlessly to any device, ensuring a smooth user experience across desktops, tablets, and smartphones.",
        href: ''
    },
    {
        num: '03',
        title: "API Integration and Development",
        description: "I provide seamless API integration, connecting your front-end with third-party services or developing custom APIs using Node.js and Express to enhance functionality and user experience.",
        href: ''
    },
    {
        num: '04',
        title: "Full-Stack MERN Development",
        description: "As a MERN stack developer, I build full-stack applications using MongoDB, Express.js, React, and Node.js, ensuring both front-end and back-end work together efficiently.",
        href: ''
    },
]


const Services = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[50px]'
        >

            {services.map((service, index)=> {
                return <div
                className="flex-1 flex flex-col justify-center gap-5 group"
                 key={index}>
                    <div className='flex w-full justify-between items-center'>
                        <div className='text-5xl font-extrabold text-outline text-transparent
                        group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>

                        <Link
                         className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
                         flex justify-center items-center hover:-rotate-45"
                         href={service.href}>
                        <BsArrowDownRight
                        className="text-primary text-3xl"
                        ></BsArrowDownRight>
                        </Link>
                    </div>

                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                    transition-all duration-500">{service.title}</h2>
                    <p className='text-white/60'>{service.description}</p>

                    <div className="border-b border-white/20 w-full"></div>

                </div>
            })}
        </motion.div>
        </div>
    </div>
  )
}

export default Services
