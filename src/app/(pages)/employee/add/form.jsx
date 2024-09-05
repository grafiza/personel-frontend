"use client"
import Date from '@/components/form-elements/date';
import Select from '@/components/form-elements/select';
import Text from '@/components/form-elements/text';
import React from 'react'
import { useRouter } from "next/navigation";
import Button from '@/components/form-elements/button';
import { createEmployee } from '@/business/employee';
import Textarea from '@/components/form-elements/textarea';
import { toast } from "sonner";
import { FaFloppyDisk } from 'react-icons/fa6';

const AddEmployeeForm = ({ dutyOptions }) => {
    const router = useRouter();
    const handleActionForm = async (formData) => {
        const result = await createEmployee(formData);
        if (result?.status) {
            router.push('/employee');
            toast.success("Kayıt Başarılı")
        } else {
            console.log(result.data);
            toast.error("Hata")
        }

    };
    return (
        <form action={handleActionForm}>

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personel Bilgileri</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Lütfen bilgileri eksiksiz doldurunuz</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <Text placeholder="Ad" className="mb-1" name="firstName" required />
                    <Text placeholder="Soyad" className="mb-1" name="lastName" required />
                    <Text placeholder="Tc Kimlik No" className="mb-1" name="ssnNumber" maxLength={11} minLength={11} required />
                    <Text placeholder="Telefon" className="mb-1" name="phone" maxLength={15} minLength={10} required />
                    <Date placeholder="İşe Başlama Tarihi" className="mb-1" name="startDate" type="date" required />
                    <Select required name="duty" placeholder="Görev">
                        {dutyOptions.options
                            ?.sort((a, b) => a.label.localeCompare(b.label))
                            .map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}

                    </Select>
                    <Textarea placeholder="Açıklama" name="description" />
                </div>

            </div>
            <Button type="submit" className="text-moon !w-[200px] ml-auto mt-10"><FaFloppyDisk/> Kaydet </Button>
        </form>
    )
}

export default AddEmployeeForm