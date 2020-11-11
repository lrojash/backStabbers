import React from 'react'
import '../styles/Picture.css'

// the users image prop will be pass down to this.
export default({ props }) => {
    return (
        <section className="user-pic">
        <div className="temp-pic">
            <p>
                User Photo
            </p>
        </div>   
        </section>
    )
}