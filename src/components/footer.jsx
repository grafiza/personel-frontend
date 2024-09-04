import { formatDate } from '@/helpers/config';
import React from 'react'

const Footer = () => {
    const today=new Date();
    const year = today.getFullYear();
  return (
    <div className='text-center p-3 bg-blue-rgb-2 text-gray-400 rounded-md mt-4'>

        <p>Dinler Yapı Market | {year}</p>
    </div>
  )
}

export default Footer