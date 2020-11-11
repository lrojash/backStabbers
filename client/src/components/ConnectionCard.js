import React from 'react'

export default({ children, ...rest}) => {
    return (
        <div className="follow-card" {...rest}>
            <h1>Followers</h1>
            {children}
        </div>
    )
}