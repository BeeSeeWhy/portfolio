import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-9 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"> 
            <LiIcon reference={ref}/>
            <div>
                <h3 className="capitalize font-bold text-2xl">
                {type}&nbsp;</h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {place}
                </span>
                <p className="font-medium w-full">
                    {info}
                </p>
            </div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
;    const {scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education 
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <div className="absolute left-9 top-0 w-[4px] h-full bg-dark/50 origin-top" />

                
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                    type="Bachelor of Science in Computer Science" 
                    time="2021-2022"
                    place="San Francisco State University"
                    info="Relevant courses included Introduction to Web Development, Human Computer Interaction,
                    Analysis of Algorithms, Introduction to Database Systems, Software Development, Software Engineering" 
                    />
                    <Details 
                    type="Associates of Science in Computer Science" 
                    time="2018-2020"
                    place="City College of San Francisco"
                    info="Relevant courses included Software Engineering, Data Structures and Algorithms, Computer
                    Architecture and Assembly, Beginning iPhone Programming, Discrete Mathematics, Calculus I & II" 
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education