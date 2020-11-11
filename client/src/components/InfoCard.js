import React from 'react'
import '../styles/Card.css'

export default ({ children, ...rest }) => {
    return (
        <div className='card' {...rest}>
            {children}
        </div>
    )
}