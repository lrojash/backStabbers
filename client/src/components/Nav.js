import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ className }) => {
    return (
        <nav>
            <NavLink activeClassName="nav-active" to="/profile">
                Profile
            </NavLink>
            <Navlink activeClassName="nav-active" to ="/connections">
                Connections
            </Navlink>
            <NavLink activeClassName="nav-active" to="/">
                Sign Out
            </NavLink>
        </nav>
    )
}