import React from 'react';

const PageableButton = ( props ) => {
  const { children, type, className, isActive, ...attr } = props;

  return (
    <button
      type={type ? type : 'button'}
      className={`w-auto h-auto px-4 py-1 mx-1 mt-4 rounded-md shadow-md 
        ${isActive ? 'bg-gray-800 text-white font-medium' : 'bg-gray-400 text-white hover:shadow-none'}
        ${className}`}
      {...attr}
    >
      {children}
    </button>
  )
}

export default PageableButton;
