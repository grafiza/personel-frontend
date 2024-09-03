"use client"
import { updateEmployee } from '@/business/employee';
import Button from '@/components/form-elements/button';
import Date from '@/components/form-elements/date';
import Select from '@/components/form-elements/select'
import Text from '@/components/form-elements/text';
import Textarea from '@/components/form-elements/textarea';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

const EditEmployeeForm = ({ getEmployee, dutyOptions }) => {
    const employee = parseInt(getEmployee.id)
    const router = useRouter();
    const [status, setStatus] = useState(getEmployee.status || '');
    const [endDate, setEndDate] = useState(getEmployee.endDate || '');
    useEffect(() => {
        // Eğer durum 'AYRILDI' ise endDate'yi etkinleştir
        if (status === 'AYRILDI') {
            setEndDate(getEmployee.endDate || '');
        } else {
            setEndDate(''); // Diğer durumlar için endDate'yi temizle
        }
    }, [status, getEmployee.endDate]);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    const handleActionForm = async (data) => {

        const result = await updateEmployee(employee, data);


        if (result?.status) {
            router.push("/employee");
            toast.success("Kayıt Başarılı");
        } else {
            console.log(JSON.parse(result.data));
            toast.error("Hata");
        }
    };

    return (
        <form action={handleActionForm}>

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personel Bilgileri</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Lütfen bilgileri eksiksiz doldurunuz</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <Text placeholder="Ad" className="mb-1" name="firstName" required defaultValue={getEmployee.firstName} />
                    <Text placeholder="Soyad" className="mb-1" name="lastName" required defaultValue={getEmployee.lastName} />
                    <Text placeholder="Tc Kimlik No" className="mb-1" name="ssnNumber" maxLength={11} minLength={11} required defaultValue={getEmployee.ssnNumber} />
                    <Text placeholder="Telefon" className="mb-1" name="phone" maxLength={15} minLength={10} required defaultValue={getEmployee.phone} />
                    <Date placeholder="İşe Başlama Tarihi" className="mb-1" name="startDate" type="date" required defaultValue={getEmployee.startDate} />
                    <Select required name="duty" placeholder="Görev" defaultValue={getEmployee.duty}>
                        <option value="">Görev</option>
                        {dutyOptions.options
                            ?.sort((a, b) => a.label.localeCompare(b.label))
                            .map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}

                    </Select>
                    <Textarea placeholder="Açıklama" name="description" defaultValue={getEmployee.description} />
                    <Select required name="status" placeholder="Durumu" defaultValue={getEmployee.status} onChange={handleStatusChange}>
                        <option value="">Durum</option>
                        <option value="CALISIYOR">CALIŞIYOR</option>
                        <option value="AYRILDI">AYRILDI</option>
                    </Select>
                    <Date placeholder="İşten Ayrılış Tarihi" className="mb-1" name="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} disabled={status !== 'AYRILDI'} />
                </div>

            </div>
            <Button className="text-moon !w-[200px] ml-auto mt-10">Güncelle </Button>
        </form>
    )
}

export default EditEmployeeForm