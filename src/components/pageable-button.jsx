import React from 'react';

const PageableButton = ( props ) => {
  const { children, type, className, isActive, ...attr } = props;

  return (
    <button
      type={type ? type : 'button'}
      className={`w-auto h-auto px-4 py-1 mx-1 mt-4 rounded-md shadow-md 
        ${isActive ? 'bg-lacivert-1 text-white font-medium' : 'bg-bej-1 text-gray-700 hover:shadow-none'}
        ${className}`}
      {...attr}
    >
      {children}
    </button>
  )
}

export default PageableButton;
