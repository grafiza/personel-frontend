import { deleteLeave } from '@/business/leave';
import React from 'react'
import { FaTrash } from 'react-icons/fa6';
import { toast } from 'sonner';

const DeleteLeave = ({ id }) => {
  const handleActionForm = async (id) => {
      try {
          console.log('Silme işlemi için ID:', id);  
          const result = await deleteLeave(id);  
          if (result?.status) {
              toast.success(result.message);
          } else {
              toast.error(result.message);
          }
      } catch (error) {
          console.error('Silme işlemi sırasında hata:', error);
          toast.error('Silme işlemi başarısız!');
      }
  };

  return (
      <FaTrash onClick={() => handleActionForm(id)} className='cursor-pointer' />
  );
};

export default DeleteLeave