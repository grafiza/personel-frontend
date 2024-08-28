  "use client"
  import React from 'react'
import { Toaster } from 'sonner'

  const page = ({ children }) => {
    return (
      <div class="bg-gray-900">

       
        
        {children}
        <Toaster position="bottom-right" richColors />
      </div>
    )
  }

  export default page
