import { Link } from "react-router-dom"

const Sidebar = ({ show }) => {
    const { showSidebar, setShowSidebar } = show
    const links = [
        { to: "/admin", title: "Dashboard", icon: "trash" },
        { to: "/admin/orders", title: "Orders", icon: "trash" },
        { to: "/admin/users", title: "Users", icon: "trash" },
        { to: "/admin/products", title: "Products", icon: "trash" },
        { to: "/admin/settings", title: "Settings", icon: "trash" }
    ]

    const linkContent = links.map(item => <Link
        to={item.to}
        key={item.title}
        className="sidebar-item">
        <i className={`fs-4 bi bi-${item.icon}`}></i>
        <span className="fs-5">{item.title}</span>
    </Link>)

    return <div className={`sidebar ${!showSidebar && "d-none"}`}>
        <div className="sidebar-header d-flex gap-4 align-items-center px-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className=" rounded-circle"
                height={50}
                width={50}
            />
            <span className="fs-5">Admin</span>
        </div>
        <div className="sidebar-body">
            {linkContent}
        </div>
    </div>
}

export default Sidebar