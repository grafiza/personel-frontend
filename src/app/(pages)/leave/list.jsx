"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaPen } from 'react-icons/fa6'
import SearchBox from '@/components/search-box'
import Button from '@/components/form-elements/button'
import { formatDate, leaveTypes } from '@/helpers/config'
import * as XLSX from 'xlsx';
import DeleteLeave from './delete'

const LeaveList = ({ leaves }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [status, setStatus] = useState('CALISIYOR'); // Varsayılan olarak CALISIYOR
    const [filteredLeaves, setFilteredLeaves] = useState(leaves);

    useEffect(() => {
        setFilteredLeaves(
            leaves
                .filter((leave) =>
                    `${leave.employee.firstName} ${leave.employee.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter((leave) => leave.employee.status === status) // Status'a göre filtreleme
        );
    }, [searchTerm, status, leaves]);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const handleExcel = () => {
        // Excel'e aktarılacak veri
        const worksheetData = filteredLeaves.map(leave => ({
            'Ad Soyad': `${leave.employee.firstName} ${leave.employee.lastName}`,
            'İzin Türü': leaveTypes(leave.leaveType),
            'İzin Başlama T.': formatDate(leave.leaveStartDate),
            'İzin Bitiş T.': formatDate(leave.leaveEndDate),
            'Kullanılan İzin': leave.leaveDays,
            'Kalan İzin Hakkı': leave.employee.remainingLeaveDays,
            'Açıklama': leave.description
        }));

        // Yeni bir çalışma kitabı oluştur
        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Leaves');

        // Excel dosyasını indir
        XLSX.writeFile(workbook, 'leaves.xlsx');
    };

    return (
        <>
            {/* Arama ve Status Butonları */}
            <div className="flex justify-between items-center gap-2 mb-2">
                <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className='flex gap-3'>
                    <Button onClick={() => handleStatusChange('CALISIYOR')} >Çalışanlar</Button>
                    <Button onClick={() => handleStatusChange('AYRILDI')}>Ayrılanlar </Button>
                    <Button className="!w-36 !bg-green-600 hover:!bg-green-800" onClick={() => handleExcel()}>Excele Aktar</Button>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-2">Ad Soyad</th>
                            <th scope="col" className="px-6 py-2">İzin Türü</th>
                            <th scope="col" className="px-6 py-2">İzin Başlama T.</th>
                            <th scope="col" className="px-6 py-2">İzin Bitiş T.</th>
                            <th scope="col" className="px-6 py-2">Kullanılan İzin</th>
                            <th scope="col" className="px-6 py-2">Kalan İzin Hakkı</th>
                            <th scope="col" className="px-6 py-2">Açıklama</th>
                            <th scope="col" className="px-6 py-2">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeaves.map(leave => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-blue-rgb-2" key={leave.id}>
                                <td scope="row" className="px-6 font-medium whitespace-nowrap text-black"><Link href={`/leave/detail/${leave.employee.id}`}> {leave.employee.firstName} {leave.employee.lastName}</Link>                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">{leaveTypes(leave.leaveType)}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{formatDate(leave.leaveStartDate)}</td>
                                <td className="px-6 py-2 whitespace-nowrap" >{formatDate(leave.leaveEndDate)}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{leave.leaveDays}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{leave.employee.remainingLeaveDays}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{leave.description}</td>
                                <td className="flex items-center px-6 py-1"><Link href={`/leave/edit/${leave.id}`} ><FaPen /></Link>&nbsp;&nbsp;<DeleteLeave id={leave.id}  /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LeaveList;
