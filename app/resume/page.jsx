"use client"

import { FaHtml5, FaCss3,FaJs ,FaReact ,FaNodeJs ,  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs,SiExpress  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


//about me
const about = {
    title: "About Me",
    description: "My name is Mamun Ahmed, and I am a front-end developer with a passion for creating responsive, user-friendly web applications. With skills in HTML, CSS, JavaScript, and React, I focus on delivering seamless user experiences and clean, efficient code.",
    info: [
        {
            filedName: 'Name',
            fieldValue: "Mamun Ahmed"
        },
        {
            filedName: 'Phone',
            fieldValue: "+8801757484944"
        },
        {
            filedName: 'Experience',
            fieldValue: "2+ Years"
        },
        {
            filedName: 'WhatsApp',
            fieldValue: "+8801981420323"
        },
        {
            filedName: 'Nationality',
            fieldValue: "Bangladeshi"
        },
        {
            filedName: 'Email',
            fieldValue: "itsmemamunbd@gmail.com"
        },
        {
            filedName: 'Freelance',
            fieldValue: "Available"
        },
        {
            filedName: 'Languages',
            fieldValue: "Bangla Native - English"
        },
    ]
}

//experience data
const experience = {
    icon: '/public/assets/resume/badge.svg',
    title: 'My Experience',
    description: "With hands-on experience in front-end technologies like HTML, CSS, JavaScript, React, and basic back-end knowledge, I've developed a strong foundation in web development. I am continuously learning and adapting to new challenges, ensuring that I deliver quality work and effective solutions.",
    items: [
        {
            company: 'Tech Solutios',
            position: 'React Developer',
            duration: '2023 - 2024'
        },
        {
            company: 'Web Design Studio',
            position: 'Front-end Developer',
            duration: '2023'
        },
        {
            company: 'TechCode LTD',
            position: 'Front-end Developer',
            duration: '2022 - 2023'
        },
        {
            company: 'Lead Agency LTD',
            position: 'Junior Web Developer',
            duration: '2021 - 2022'
        },
    ]
}


//education data
const education = {
    icon: '/public/assets/resume/cap.svg',
    title: 'My Education',
    description: "I have a strong educational foundation in accounting, complemented by hands-on experience in web development.",
    items: [
        {
            institution: 'Chhatiain High School and College',
            degree: 'SSC - 2021',
            gpa: '3.00'
        },
        {
            institution: 'Syed Syed Uddin Degree College',
            degree: 'HSC - 2023',
            gpa: '4.17'
        },


    ]
}

const skills = {
    title: "My Skills",
    description: "I specialize in front-end technologies like HTML, CSS, and Tailwind CSS, creating responsive and visually appealing websites. With JavaScript and React, I develop dynamic and interactive user interfaces that enhance user experience. On the back-end, I use Node.js and Express.js to build efficient server-side applications, while MongoDB serves as my go-to database solution for managing and storing data seamlessly.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon:<RiTailwindCssFill />            ,
            name: "Tailwind CSS"
        },
        {
            icon: <FaJs  />,
            name: "JavaScript"
        },
        {
            icon: <FaReact  />,
            name: "React.Js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.Js"
        },
        {
            icon: <FaNodeJs  />,
            name: "Node.Js"
        },
        {
            icon: <SiExpress />,
            name: "Express.Js"
        },
        {
            icon: <DiMongodb/>,
            name: "MongoDB"
        },
    ]
}


import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipTrigger, TooltipProvider} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import { motion } from "framer-motion"




const Resume = () => {
  return (
    <section>
       <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1,
       transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
       }}
       className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
       >
        <div className="container mx-auto">
            <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">

                    {/* experience */}
                    <TabsContent value="experience">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-center lg:text-left  text-white/60 xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index)=> {
                                        return <li key={index}
                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                           <div className="flex items-center gap-3">
                                            <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                                            <h1 className="text-white/60">{item.company}</h1>
                                           </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>


                    {/* education */}
                    <TabsContent value="education">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-center lg:text-left  text-white/60 xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index)=> {
                                        return <li key={index}
                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.degree}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.gpa}</h3>
                                           <div className="flex items-center gap-3">
                                            <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                                            <h1 className="text-white/60">{item.institution}</h1>
                                           </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>


                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((skill, index)=> {
                            return(
                                <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                            );
                        })}
                    </ul>
                    </div>
                    </TabsContent>



                    {/* about me */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                            {about.info.map((item, index)=> {
                                return (
                                    <li key={index}
                                    className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.filedName}:</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    </TabsContent>

                </div>
            </Tabs>
        </div>


       </motion.div>

    </section>
  )
}

export default Resume
