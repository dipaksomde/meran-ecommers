import React from 'react'

const AdminNavbar = ({ show }) => {
    const { showSidebar, setShowSidebar } = show
    return <nav class={`navbar navbar-expand-lg bg-primary ${showSidebar && "ml-200"}`} >
        <div class="container">
            <button
                className='btn'
                onClick={e => setShowSidebar(!showSidebar)} >
                {showSidebar
                    ? <i className='fs-1 nav-link bi bi-x-lg'></i>
                    : <i className='fs-1 nav-link bi bi-list'></i>}
            </button>
            <a class="navbar-brand" href="#">Admin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar