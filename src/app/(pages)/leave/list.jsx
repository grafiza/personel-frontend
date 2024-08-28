"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaPen } from 'react-icons/fa6'
import SearchBox from '@/components/search-box'
import Button from '@/components/form-elements/button'
import { formatDate, leaveTypes } from '@/helpers/config'

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

    return (
        <>
            {/* Arama ve Status Butonları */}
            <div className="flex justify-between items-center gap-2 mb-2">
                <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className='flex gap-3'>
                <Button onClick={() => handleStatusChange('CALISIYOR')} >Çalışanlar</Button>

                <Button onClick={() => handleStatusChange('AYRILDI')}>Ayrılanlar </Button>

                </div>
                
                
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ad Soyad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                İzin Türü
                            </th>
                            <th scope="col" className="px-6 py-3">
                                İzin Başlama T.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                İzin Bitiş T.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kullanılan İzin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kalan İzin Hakkı
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Açıklama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeaves.map(personel => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-orange-400"
                                key={personel.id}
                            >
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                                    {personel.employee.firstName} {personel.employee.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {leaveTypes(personel.leaveType)}
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(personel.leaveStartDate)}
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(personel.leaveEndDate)}
                                </td>
                                <td className="px-6 py-4">
                                    {personel.leaveDays}
                                </td>
                                <td className="px-6 py-4">
                                    {personel.employee.remainingLeaveDays}
                                </td>
                                <td className="px-6 py-4">
                                    {personel.description}
                                </td>
                                <td className="flex items-center px-6 py-4">
                                    <Link href={`/leave/edit/${personel.id}`} className="font-medium text-orange-400 dark:text-blue-500 hover:underline">
                                        <FaPen />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LeaveList;
