import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../../context/UserContext"
import { UserPointContext } from "../../context/UserPointContext"

function ApplicationPageHeader({ children, user }) {

    const [isOpened, setIsOpened] = useState(false)
    const [isProfileOpened, setIsProfileOpened] = useState(false)
    const { setUser } = useContext(UserContext)
    const { userPoint } = useContext(UserPointContext)

    const handleClickSignout = (e) => {
        e.preventDefault()
        localStorage.removeItem("access_token")
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <div>
            <nav className="appnav navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">benbilirim</Link>
                <button className="navbar-toggler" type="button" onClick={e => setIsOpened(!isOpened)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" style={{ display: isOpened ? "block" : "none" }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Hakkında</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rank" className="nav-link">Sıralama</Link>
                        </li>
                    </ul>
                </div>

                <div className="btn-group">
                    <h3><span className="badge badge-success">{userPoint}</span></h3>
                    <button type="button" className="btn btn-dark dropdown-toggle" onClick={e => setIsProfileOpened(!isProfileOpened)}>
                        {user.firstName} {user.lastName}
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg-right" style={{ display: isProfileOpened ? "block" : "none" }}>
                        {user.role === "admin" ? <Link to="/admin" className="dropdown-item">Admin Seçenekleri</Link> : null}
                        <button className="dropdown-item" type="button" onClick={e => handleClickSignout(e)}>Çıkış Yap</button>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default ApplicationPageHeader