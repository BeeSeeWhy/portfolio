import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-sm sm:text-base lg:text-lg 
        '>
            <Layout className='py-6 sm:py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <span className='text-center md:text-left'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center justify-center'>
                Built with <span className='text-primary text-2xl px-1'>&hearts;</span>by&nbsp;<Link href="/" className='underline
                underline-offset-2
                '>Brandon</Link>
                </div>
                <Link href="/" target={"_blank" } className='underline underline-offset-2 text-center md:text-right'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer 