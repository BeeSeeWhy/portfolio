import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y})=> {
    return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-2 px-4 sm:py-3 sm:px-6 text-xs sm:text-sm lg:text-base shadow-dark cursor-pointer absolute
                '
                whileHover={{scale:1.05}}
                initial={{x:0, y:0}}
                whileInView={{x:x, y:y}}
                transition={{duration: 1.5}}
                viewport={{once: true}}
                >
                    {name}
                </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl mt-24 sm:mt-32 md:mt-40 lg:mt-64 w-full text-center'>Skills</h2>

            <div className='w-full mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:hidden'>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>Web</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>HTML</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>CSS</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>Javascript</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>ReactJS</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>NextJS</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>Typescript</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>Figma</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>MapBox</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>Tailwind CSS</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>SCSS</span>
                <span className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>Webflow</span>
                <span className='col-span-2 sm:col-span-1 flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 text-sm shadow-dark'>SendGrid</span>
            </div>

            <div className='hidden md:flex w-full h-[70vh] lg:h-screen relative items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-6 lg:p-8 text-sm lg:text-base shadow-dark cursor-pointer
                '
                whileHover={{scale:1.05}}
                >
                    Web
                </motion.div>

                <Skill name="HTML" x="-27vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="13vw" />
                <Skill name="Javascript" x="20vw" y="6vw" />
                <Skill name="ReactJS" x="-5vw" y="-10vw" />
                <Skill name="NextJS" x="-22vw" y="-15vw" />
                <Skill name="Typescript" x="16vw" y="-12vw" />
                <Skill name="Figma" x="0vw" y="-19.5vw" />
                <Skill name="MapBox" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="18vw" y="18vw" />
                <Skill name="SCSS" x="8vw" y="-20vw" />
                <Skill name="Webflow" x="28vw" y="-6vw" />
                <Skill name="SendGrid" x="30vw" y="10vw" />
            </div>
        </>
    )
}

export default Skills