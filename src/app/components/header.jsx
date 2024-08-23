
import React from 'react'

const Header = ({ props }) => {
    return (
        <div className='bg-orange-400 mb-2  rounded shadow-md'>
            <h1 className='p-4 text-2xl font-semibold text-white'>
                {props}
            </h1>
        </div>
    )
}

export default Header