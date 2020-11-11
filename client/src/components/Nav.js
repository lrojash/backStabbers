import Reac from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

export default ({ authenticated, currentUser, className }) => {
    let authenticated = true
    let currentUser = ''
    return authenticated && currentUser ? (
        <header className={className}>
            <nav>
                <NavLink activeClassName="nav-active" to ="/profile">
                    Profile
                </NavLink>
                <NavLink activeClassName="nav-active" to="/post">
                    Post
                </NavLink>
                <NavLink activeClassName="nav-active" to="/connections">
                    Connections
                </NavLink>
                <NavLink activeClassName="nav-active" to="/" onClick={() => localStorage.clear()}>
                    Sign Out
                </NavLink>
            </nav>
        </header>
    ): (
        <header className={className}>
        <nav>
            <NavLink activeClassName="nav-active" to ="/register">
                Register
            </NavLink>
            <NavLink activeClassName="nav-active" to="/signin">
                Sign In
            </NavLink>
        </nav>
    </header>
    )
}
