import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg  w-full">
        {children}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Modal;
