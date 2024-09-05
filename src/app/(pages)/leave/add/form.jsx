"use client"
import { createLeave } from '@/business/leave';
import Button from '@/components/form-elements/button';
import Date from '@/components/form-elements/date';
import Select from '@/components/form-elements/select';
import Textarea from '@/components/form-elements/textarea';
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaFloppyDisk } from 'react-icons/fa6';
import { toast } from "sonner";

const AddLeaveForm = ({ employee, leaveOptions,dutyOptions }) => {

  const router = useRouter();
  const handleActionForm = async (formData) => {
    
    const result = await createLeave(formData);
      
    if (result?.status) {
      router.push('/leave');
      
      toast.success("Kayıt Başarılı")
    } else {
      console.log(result.data+" hataya düştü");
      toast.error(result.error)
    }
  }
  return (
    <form action={handleActionForm}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">İzin Bilgileri</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Lütfen bilgileri eksiksiz doldurunuz</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Select name="employeeId" placeholder="Personel Seçiniz" required>

          {employee?.map((emp, index) => (
              <option key={index} value={emp.id}>
                {emp.firstName} {emp.lastName}
              </option>
            ))}
          </Select>
          
          <Date placeholder="İzin Başlama Tarihi" className="mb-1" name="leaveStartDate" type="date" required />
          <Date placeholder="İzin Bitiş Tarihi" className="mb-1" name="leaveEndDate" type="date" required />
          <Select required name="leaveType" placeholder="İzin Türü">
          {leaveOptions.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            
          </Select>
          <Textarea placeholder="Açıklama" name="description" />
        </div>
        <div className='p-10 text-center text-red-600 font-semibold'>Eğer izin yarım gün girilecekse, açıklama kutusuna "YARIM GÜN" veya "yarım gün" yazınız. Başka bir şey yazmayınız!</div>

      </div>
      <Button type="submit" className="text-moon !w-[200px] ml-auto mt-10"><FaFloppyDisk/> İzin Kaydet </Button>

    </form>
  )
}

export default AddLeaveForm