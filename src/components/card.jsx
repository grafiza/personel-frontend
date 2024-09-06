import React from 'react'
import { Children } from 'react/cjs/react.production.min'

const Card = ({title,children}) => {
  return (
    
<>

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
{children}

</>
  )
}

export default Card