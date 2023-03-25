import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    const links = [
        { to: "/user", label: "Account", icon: "person-vcard" },
        { to: "/user/profile", label: "Profile", icon: "person" },
        { to: "/user/orders", label: "Orders", icon: "cart" },
        { to: "/user/settings", label: "Setting", icon: "gear" },
    ]
    const linkContent = links.map(item => <Link className='nav-link' to={item.to} key={item.label}>
        <i className={`bi bi-${item.icon} mx-2`}></i>
        {item.label}
    </Link>)
    return <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <Link to="/user" class="navbar-brand" >Welcome John</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {linkContent}
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default UserNavbar