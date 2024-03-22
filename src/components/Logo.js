import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"



const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Link href="/"
            className='w-16 h-16 bg-dark text-light flex items-center justify-center
            rounded-full'
            >BCY</Link>
        </div>
    )
}

export default Logo