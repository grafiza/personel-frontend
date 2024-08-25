"use client"
import Date from '@/app/components/form-elements/date';
import Select from '@/app/components/form-elements/select';
import Text from '@/app/components/form-elements/text';
import React from 'react'
import { useRouter } from "next/navigation";
import Button from '@/app/components/form-elements/button';
import { createEmployee } from '@/app/business/employee';

const AddEmployeeForm = () => {
    const router = useRouter();
        

   

    const handleActionForm = async (formData) => {
      const result = await createEmployee(formData);
        console.log("result :------------" + result.status);
        if (result?.status) {
          router.push('/employee'); 
          console.log("------------ KAYDEDİLDİ -----------------");
        } else {
          console.log(result.data);
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
                            <option value="">Görev</option>
                            <option value="BEKCI">Bekçi</option>
                            <option value="KASIYER">Kasiyer</option>
                            <option value="SATIS">Satış Personeli</option>
                            <option value="MUHASEBE">Muhasebe</option>
                            <option value="SEF">Şef</option>
                        </Select>
                    </div>
                    
                </div>
                <Button type="submit" className="text-moon !w-[200px] ml-auto mt-10">Create </Button>
            </form>
        )
    }

    export default AddEmployeeForm