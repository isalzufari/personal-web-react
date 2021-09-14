import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = 'Page Not Found';
    })
    return (
        <>
            <div className="not-found">
                <h1 className="center-align about-heading">
                    404: Page not found
                </h1>
            </div> 
        </>
    )
}

export default NotFound
