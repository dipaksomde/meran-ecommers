import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../public'
import { UserNavbar } from './index'

const UserLayout = () => {
    return <>
        <UserNavbar />
        <Outlet />
        <Footer />
    </>
}

export default UserLayout