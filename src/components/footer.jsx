import { formatDate } from '@/helpers/config';
import React from 'react'

const Footer = () => {
    const today=new Date();
    const year = today.getFullYear();
  return (
    <div className='text-center p-3 bg-lacivert-1 text-white rounded-md mt-4'>

        <p>Dinler Yapı Market &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {year}</p>
    </div>
  )
}

export default Footer