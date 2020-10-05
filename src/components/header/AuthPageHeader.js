import React from 'react'
import { Link } from 'react-router-dom'

function AuthPageHeader({ children }) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand">benbilirim</Link>

            </nav>
            {children}
        </div>
    )
}

export default AuthPageHeader
