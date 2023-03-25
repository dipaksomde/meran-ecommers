import React from 'react'
import { Link } from 'react-router-dom'
import "./../../assets/public-navbar.css"
const Navbar = () => {
    return <>
        <Search />
        <nav className="navbar navbar-expand-lg bg-white  mb-5">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Menu />
                    </div>
                    <div className='ms-auto'>
                        <Link
                            to="cart"
                            className="btn btn-outline-primary mx-2"><i className='bi bi-cart'></i>
                        </Link>
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#search"
                            className="btn btn-outline-primary"><i className='bi bi-search'></i></button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}


const Menu = () => {
    const menuItems = [
        {
            title: "Clothes",
            sub: "Lorem Ipsum"
        },
        {
            title: "Footware",
            sub: "Lorem Ipsum"
        },
        {
            icon: "phone",
            title: "Mobile",
            sub: "Lorem Ipsum"
        }
    ]
    const menuContent = menuItems.map(item => <div className="col-sm-4" key={item.title}>
        <div className="card my-3">
            <div className="card-body d-flex gap-5 align-items-center menuItem">
                <i className={`bi bi-${item.icon ? item.icon : "cart"} fs-1`}></i>
                <div>
                    <h6>{item.title}</h6>
                    <p>{item.sub}</p>
                </div>
            </div>
        </div>
    </div>)

    return <div >
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
            Menu
        </button>
        <ul className="dropdown-menu w-100 bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            {menuContent}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80" className='img-fluid' alt="" />
                            <div className="card-body">
                                <h6>Awesome Product</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button type="button" className="btn btn-primary">Shop Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
}

const Search = () => {
    const links = []
    for (let i = 0; i < 12; i++) {
        links.push(`Link ${i}`)
    }
    const linkContent = links.map(item => <div
        className='col-sm-3 my-4'
        key={item}>
        <a href='#' className='text-decoration-none'>{item}</a>
    </div>
    )
    return <div className="collapse " id='search' >
        <div className="card">
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Product" />
                                <button type="button" className="btn btn-primary"><i className='bi bi-search'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {linkContent}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Navbar