import "./../assets/admin-dashboard.css"
import { Outlet } from "react-router-dom"
import { AdminNavbar, Sidebar } from './index'
import { useState } from "react"
const AdminLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return <>
        <Sidebar show={{ showSidebar, setShowSidebar }} />
        <AdminNavbar show={{ showSidebar, setShowSidebar }} />
        <div className={`py-3 ${showSidebar && "ml-200"}`}>
            <Outlet />
        </div>
    </>
}

export default AdminLayout