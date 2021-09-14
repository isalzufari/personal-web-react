import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - isalzufari';
    })
    
    return (
        <>
            <div className='contact'>
                <h1 className="center-align about-heading">CONTACT</h1>
                <h5>
                    Urusan duniawi DM sosmed aja.
                </h5>
            </div>
        </>
    )
}

export default Contact
