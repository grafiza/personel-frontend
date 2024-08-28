"use client"
import { updateLeave } from '@/business/leave';
import Button from '@/components/form-elements/button';
import Date from '@/components/form-elements/date';
import Select from '@/components/form-elements/select';
import Textarea from '@/components/form-elements/textarea';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const EditLeaveForm = ({getLeave,employeeList}) => {
    const leaveId = parseInt(getLeave.id)
    const router = useRouter();


    console.log(employeeList)
    const handleActionForm = async (data) => {
        
        const result = await updateLeave(leaveId, data);

        if (result?.status) {
            router.push("/leave");
            toast.success(result.message);
        } else {
            console.log(JSON.parse(result.data));
            toast.error(result.message);
        }
    };
  return (
    <form action={handleActionForm}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">İzin Bilgileri</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Lütfen bilgileri eksiksiz doldurunuz</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Select name="employeeId" placeholder="Personel Seçiniz" required defaultValue={getLeave.employee.id}>

            {employeeList?.map((emp, index) => (
              <option key={index} value={emp.id}>
                {emp.firstName} {emp.lastName}
              </option>
            ))}
          </Select>
          <Select required name="leaveType" placeholder="İzin Türü" defaultValue={employeeList.leaveType}>
            <option value="" disabled>Seçiniz</option>
            <option value="YILLIK">Yıllık İzin</option>
            <option value="UCRETSIZ">Ücretsiz İzin</option>
            <option value="SAGLIK">Sağlık İzni</option>
          </Select>
          <Date placeholder="İzin Başlama Tarihi" className="mb-1" name="leaveStartDate" type="date" required defaultValue={getLeave.leaveStartDate}/>
          <Date placeholder="İzin Bitiş Tarihi" className="mb-1" name="leaveEndDate" type="date" required defaultValue={getLeave.leaveEndDate}/>

          <Textarea placeholder="Açıklama" name="description" defaultValue={getLeave.description}/>
        </div>

      </div>
      <Button className="!w-[200px] ml-auto mt-10">İzin Güncelle </Button>
      

    </form>
  )
}

export default EditLeaveForm