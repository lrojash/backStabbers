import React from 'react'
import '../styles/PostsCard.css'

export default ({ children, ...rest }) => {
    return (
        <div className='posts-card' {...rest}>
            <h1>Posts</h1>
            {children}
        </div>
    )
}