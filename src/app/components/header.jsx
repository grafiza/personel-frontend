
import React from 'react'
import AddButton from './add-button'

const Header = ({ headerTitle, buttonTitle, adres }) => {
    console.log("header title"+headerTitle)
    return (
        <div className='bg-orange-400 mb-2  rounded shadow-md flex justify-between items-center'>
            <div>
                <h1 className='p-4 text-2xl font-semibold text-white'>
                {headerTitle}
            </h1></div>
            <div className='p-4'> <AddButton title={buttonTitle} adres={adres}/></div>
            
           
        </div>
    )
}

export default Header