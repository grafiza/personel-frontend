import React from 'react'
import Link from 'next/link'

const AddButton = ({ title, adres }) => {
    console.log("bakalım href ne : "+adres)
    return (
    
        <Link href="/pages/employee/add" className="hover:text-orange-400 hover:shadow-none bg-white w-auto h-auto p-3 rounded-md shadow-md">
            
                {title}
          
        </Link>
    );
}

export default AddButton