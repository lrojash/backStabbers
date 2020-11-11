import React from 'react'
import Nav from '../components/Nav'
import '../styles/LandingPage.css'

export default ({ children }) => {
    return (
        <div>
            <Nav />
            {children}  
        </div>
    )
}