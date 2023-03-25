import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './index'

const PublicLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}

export default PublicLayout