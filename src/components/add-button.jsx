import React from 'react'
import Link from 'next/link'

const AddButton = ({ title, adres }) => {
    return (
    
        <Link href={adres} className="text-sm hover:bg-blue-rgb-hover hover:shadow-none bg-gray-800 text-white w-auto h-auto py-1 px-3 rounded-md shadow-md">
            
                {title}
          
        </Link>
    );
}

export default AddButton