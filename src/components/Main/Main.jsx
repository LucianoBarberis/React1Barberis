import React from 'react'
import './Main.css'

const Main = ( {message} ) => {
    return (
        <main>
            <div className='msg'><h2>{message}</h2></div>
        </main>
    )
}

export default Main