import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t border-solid border-line
        font-mono text-xs text-mist-light
        '>
            <Layout className='py-6 sm:py-7 bg-ink flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <span className='text-center md:text-left'>{new Date().getFullYear()} &copy; Brandon Cruz-Youll</span>
                <div className='flex items-center justify-center'>
                Built with <span className='text-amber text-base px-1'>&hearts;</span>by&nbsp;<Link href="/" className='underline
                underline-offset-2 hover:text-amber transition-colors
                '>Brandon</Link>
                </div>
                <Link href="mailto:brandon@beeseewhy.com" className='underline underline-offset-2 text-center md:text-right hover:text-amber transition-colors'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer 