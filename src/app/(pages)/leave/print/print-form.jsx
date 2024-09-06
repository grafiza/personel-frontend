import Button from '@/components/form-elements/button';
import { formatDate, leaveTypes } from '@/helpers/config'
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const PrintForm = ({ getLeave }) => {
    const componentRef = useRef(); // useRef ile referans oluşturun
    const today = new Date();

    return (
        <div className="flex flex-col">
            <ReactToPrint
                trigger={() => {
                    return <Button className="w-32 mt-4 bg-red-500 text-white !py-2 px-4 rounded">Yazdır</Button>
                        
                }}
                content={() => componentRef.current} // useRef'i burada kullanın
                documentTitle='İzin Belgesi'
                pageStyle="print"
            />
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5" ref={componentRef}> {/* ref'i buraya ekleyin */}
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className='mt-5 p-5 text-center text-3xl'>
                            <p className='p-4'>FİRMA ÜNVANI: DİNLER ÇİVİ BOYA İNŞ. GIDA PAZ.LTD.ŞTİ</p>
                            <p className='p-4'>ADRES : SANCAKLAR MAH. AKÇAKOCA KARAYOLU CAD. NO:111 MERKEZ / DÜZCE</p>
                        </div>
                        <table className="table-auto text-2xl">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="2" className="text-4xl font-bold py-10 text-center">
                                        <u>PERSONEL İZİN İSTEK FORMU</u>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td className="px-6 py-3" width="40%">İzin Düzenleme Tarihi</td>
                                    <td className="px-6 py-3">{formatDate(today)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-3">Adı Soyadı</td>
                                    <td className="px-6 py-3">{getLeave.employee.firstName} {getLeave.employee.lastName}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-3">İzin Başlangıç Tarihi</td>
                                    <td className="px-6 py-3">{formatDate(getLeave.leaveStartDate)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-3">İzin Bitiş Tarihi</td>
                                    <td className="px-6 py-3">{formatDate(getLeave.leaveEndDate)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-3">İzin Türü</td>
                                    <td className="px-6 py-3">{leaveTypes(getLeave.leaveType)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-3">İzin Süresi</td>
                                    <td className="px-6 py-3">{leaveTypes(getLeave.leaveDays)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-3">Kalan İzin Süresi</td>
                                    <td className="px-6 py-3">{leaveTypes(getLeave.employee.remainingLeaveDays)}</td>
                                </tr>
                                <tr className='border-b h-32'>
                                    <td className="px-6 py-3">Personel İmzası</td>
                                    <td className="px-6 py-3"></td>
                                </tr>
                                <tr className='border-b'>
                                    <td colSpan="2" className='p-10'>
                                        Bu izin yukarıda bahsedilen maksat için kullanılmadığı veya izin süresine uyulmadığı taktirde ilgili mevzuata göre cezai işlem uygulanacaktır.
                                    </td>
                                </tr>
                                <tr className='border-b h-44 align-text-top text-center'>
                                    <td>BÖLÜM SORUMLUSU</td>
                                    <td>KAŞE / İMZA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintForm;
