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
                    return <button>Yazdır</button>
                }}
                content={() => componentRef.current} // useRef'i burada kullanın
                documentTitle='İzin Belgesi'
                pageStyle="print"
            />
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5" ref={componentRef}> {/* ref'i buraya ekleyin */}
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className='mt-5 p-5 text-center text-xl'>
                            <p>FİRMA ÜNVANI: DİNLER ÇİVİ BOYA İNŞ. GIDA PAZ.LTD.ŞTİ</p>
                            <p>ADRES : SANCAKLAR MAH. AKÇAKOCA KARAYOLU CAD. NO:111 MERKEZ / DÜZCE</p>
                        </div>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="2" className="text-3xl font-bold py-10 text-center">
                                        <u>PERSONEL İZİN İSTEK FORMU</u>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td className="px-6 py-2" width="40%">İzin Düzenleme Tarihi</td>
                                    <td className="px-6 py-2">{formatDate(today)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-2">Adı Soyadı</td>
                                    <td className="px-6 py-2">{getLeave.employee.firstName} {getLeave.employee.lastName}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-2">İzin Başlangıç Tarihi</td>
                                    <td className="px-6 py-2">{formatDate(getLeave.leaveStartDate)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-2">İzin Bitiş Tarihi</td>
                                    <td className="px-6 py-2">{formatDate(getLeave.leaveEndDate)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-2">İzin Türü</td>
                                    <td className="px-6 py-2">{leaveTypes(getLeave.leaveType)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-2">İzin Süresi</td>
                                    <td className="px-6 py-2">{leaveTypes(getLeave.leaveDays)}</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className="px-6 py-2">Kalan İzin Süresi</td>
                                    <td className="px-6 py-2">{leaveTypes(getLeave.employee.remainingLeaveDays)}</td>
                                </tr>
                                <tr className='border-b h-32'>
                                    <td className="px-6 py-2">İmza</td>
                                    <td className="px-6 py-2"></td>
                                </tr>
                                <tr className='border-b'>
                                    <td colSpan="2" className='p-10'>
                                        Bu izin yukarıda bahsedilen maksat için kullanılmadığı veya izin süresine uyulmadığı taktirde ilgili mevzuata göre cezalandırılacaktır.
                                    </td>
                                </tr>
                                <tr className='border-b h-72 align-text-top text-center'>
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
