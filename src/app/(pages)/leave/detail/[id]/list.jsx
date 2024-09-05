"use client"
import { formatDate, leaveTypes } from '@/helpers/config'
import React from 'react'
import { FaPen } from 'react-icons/fa6'
import DeleteLeave from '../../delete'
import Link from 'next/link'

const EmployeLeaveList = ( {leaves} ) => {
    if (!Array.isArray(leaves)) {
        return <div>Hata: Beklenen veri tipi bir dizi değil.</div>;
      }
console.log("leaves böyle geliyor : "+leaves)

    return (
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
                    {leaves.map(leave => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-blue-rgb"
                            key={leave.id}>
                            <td scope="row" className="px-6 font-medium whitespace-nowrap text-red-600">{leave.employee.firstName} {leave.employee.lastName}</td>
                            <td className="px-6 py-2">{leaveTypes(leave.leaveType)}</td>
                            <td className="px-6 py-2">{formatDate(leave.leaveStartDate)}</td>
                            <td className="px-6 py-2">{formatDate(leave.leaveEndDate)}</td>
                            <td className="px-6 py-2">{leave.leaveDays}</td>
                            <td className="px-6 py-2">{leave.employee.remainingLeaveDays}</td>
                            <td className="px-6 py-2">{leave.description}</td>
                            <td className="flex items-center px-6"><Link href={`/leave/edit/${leave.id}`} ><FaPen /></Link>&nbsp;&nbsp;<DeleteLeave id={leave.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeLeaveList