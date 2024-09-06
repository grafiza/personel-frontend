import React from 'react'
import AddButton from './add-button'

const Header = ({ headerTitle, buttons }) => {
    return (
        <div className='bg-lacivert-1 mb-2  rounded shadow-md flex justify-between items-center mt-2'>
            <div>
                <h4 className='p-3 text-lg font-semibold text-white'>
                {headerTitle}
            </h4></div>

            <div className='p-2 flex space-x-2'>
                {buttons?.map((button, index) => (
                    <AddButton key={index} title={button.title} adres={button.adres} />
                ))}
            </div>
        </div>
    )
}

export default Header
