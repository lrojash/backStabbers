import React from 'react'
import '../styles/Card.css'
import Username from './Username'
import Pic from './Picture'

export default ({ children, ...rest }) => {
    return (
        <div className='card' {...rest}>
            <ul>
                <Pic />
                <Username />
            </ul>
        </div>
    )
}