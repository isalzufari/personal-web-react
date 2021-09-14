import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log(name);
    })

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <section>
                <input value={name}
                    onChange={handleNameChange}
                />
            </section>
        </>
    )
}

export default Contact
