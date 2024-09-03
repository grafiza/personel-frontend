import { formatDate, leaveTypes } from '@/helpers/config'
import React from 'react'

const PrintForm = ({ getLeave }) => {
                                    <td>İzin Düzenleme Tarihi</td>
const today=new Date();
    return (
        <div class="flex flex-col">

            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <div className='mt-5 p-5  text-center text-xl'>
                            <p>FİRMA ÜNVANI: DİNLER ÇİVİ BOYA İNŞ. GIDA PAZ.LTD.ŞTİ</p>
                            <p>ADRES : SANCAKLAR MAH. AKÇAKOCA KARAYOLU CAD. NO:111 MERKEZ / DÜZCE</p>
                        </div>
                        <table class="min-w-full table-auto text-xl">
                            <thead >
                                <tr>
                                    <th scope="col" colspan="2" className="text-5xl font-bold py-10 text-center">
                                        <u> PERSONEL İZİN İSTEK FORMU</u>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium" width="40%">İzin Düzenleme Tarihi</td>
                                    <td class="px-6 py-4 ">{formatDate(today)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium" >Adı Soyadı</td>
                                    <td class="px-6 py-4 ">{getLeave.employee.firstName} {getLeave.employee.lastName}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium">İzin Başlangıç Tarihi</td>
                                    <td class="px-6 py-4 ">{formatDate(getLeave.leaveStartDate)}</td>
                                </tr>

                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium">İzin Bitiş Tarihi </td>
                                    <td class="px-6 py-4 ">{formatDate(getLeave.leaveEndDate)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium">İzin Türü</td>
                                    <td class="px-6 py-4 ">{leaveTypes(getLeave.leaveType)} </td>
                                </tr>
                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium">İzin Süresi</td>
                                    <td class="px-6 py-4 ">{leaveTypes(getLeave.leaveDays)} </td>
                                </tr>
                                <tr className='border-b'>
                                    <td class="px-6 py-4   font-medium">Kalan İzin Süresi</td>
                                    <td class="px-6 py-4 ">{leaveTypes(getLeave.employee.remainingLeaveDays)} </td>
                                </tr>
                                <tr className='border-b h-32'>
                                    <td class="px-6 py-4   font-medium">İmza</td>
                                    <td class="px-6 py-4 "> </td>
                                </tr>
                                <tr className='border-b'>
                                    <td colSpan="2" className='p-10'>Bu izin yukarıda bahsedilen maksat için kullanılmadığı veya izin süresine uyulmadığı taktirde ilgili mevzuata göre cezalandırılacaktır.</td>
                                </tr>
                                <tr className='border-b h-72 align-text-top text-center'>
                                    <td>BÖLÜM SORUMLUSU</td><td>KAŞE / İMZA</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintForm