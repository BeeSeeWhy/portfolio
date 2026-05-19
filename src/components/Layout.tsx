import React from 'react'

const Layout = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light px-6 py-10 sm:px-10 sm:py-12 md:px-16 lg:px-24 xl:px-28 2xl:px-32 ${className}`}>
            {children}
        </div>
    )
}

export default Layout 