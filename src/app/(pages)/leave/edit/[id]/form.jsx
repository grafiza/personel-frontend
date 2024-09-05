"use client"
import React from 'react';
import { updateLeave } from '@/business/leave';
import Button from '@/components/form-elements/button';
import Date from '@/components/form-elements/date';
import Select from '@/components/form-elements/select';
import Textarea from '@/components/form-elements/textarea';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const EditLeaveForm = ({ getLeave, employeeList, leaveOptions }) => {
  const leaveId = parseInt(getLeave.id);
  const router = useRouter();

  const handleActionForm = async (data) => {
    const result = await updateLeave(leaveId, data);

    if (result?.status) {
      router.push("/leave");
      toast.success("Güncelleme Başarılı");
    } else {
      console.log(JSON.parse(result.data));
      toast.error(result.message);
    }
  };
  const handlePrint = () => {
    sessionStorage.setItem('leaveData', JSON.stringify(getLeave));
    router.push('/leave/print');
  };


  return (
    <>
      <form action={handleActionForm}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7">İzin Bilgileri</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Lütfen bilgileri eksiksiz doldurunuz</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Select name="employeeId" placeholder="Personel Seçiniz" required defaultValue={getLeave.employee.id}>
              {employeeList?.filter(emp => emp.status === 'CALISIYOR').map((emp, index) => (
                <option key={index} value={emp.id}>
                  {emp.firstName} {emp.lastName}
                </option>
              ))}
            </Select>

            <Date placeholder="İzin Başlama Tarihi" className="mb-1" name="leaveStartDate" type="date" required defaultValue={getLeave.leaveStartDate} />
            <Date placeholder="İzin Bitiş Tarihi" className="mb-1" name="leaveEndDate" type="date" required defaultValue={getLeave.leaveEndDate} />
            <Select required name="leaveType" placeholder="İzin Türü" defaultValue={getLeave.leaveType}>
              {leaveOptions.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            
            <Textarea placeholder="Açıklama" name="description" defaultValue={getLeave.description} />
          </div>
          <div className='p-10 text-center text-red-600 font-semibold'>Eğer izin yarım gün girilecekse, açıklama kutusuna "YARIM GÜN" veya "yarım gün" yazınız. Başka bir şey yazmayınız!</div>
        </div>

        <Button className="!w-[200px] ml-auto mt-10">İzin Güncelle</Button>

      </form>
      <Button type="button" onClick={handlePrint} className="!w-[200px] ml-auto mt-10">İzin Yazdır</Button>

    </>
  );
};

export default EditLeaveForm;
