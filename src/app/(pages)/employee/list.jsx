"use client"
import Button from '@/components/form-elements/button';
import SearchBox from '@/components/search-box';
import { duty, formatDate } from '@/helpers/config';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa6'
import * as XLSX from 'xlsx';
const EmployeeList = ({ employee }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [status, setStatus] = useState('CALISIYOR'); // Varsayılan olarak CALISIYOR
    const [filteredEmployees, setFilteredEmployees] = useState(employee);

    useEffect(() => {
        setFilteredEmployees(
            employee
                .filter((emp) =>
                    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter((emp) => emp.status === status) // Status'a göre filtreleme
        );
    }, [searchTerm, status, employee]);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };
    const handleExcel = () => {
        // Excel'e aktarılacak veri
        const worksheetData = filteredEmployees.map(emp => ({
            'Ad Soyad': `${emp.firstName} ${emp.lastName}`,
            'Tc Kimlik No': emp.ssnNumber,
            'Telefon': emp.phone,
            'Görev': duty(emp.duty),
            'İşe Başlama T.': formatDate(emp.startDate),
            'İzin Hakkı': emp.leaveDays,
            'Kalan İzin Hakkı': emp.remainingLeaveDays,
            'Açıklama': emp.description
        }));
    
        // Yeni bir çalışma kitabı oluştur
        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    
        // Excel dosyasını indir
        XLSX.writeFile(workbook, 'employees.xlsx');
    };
    return (
        <>
            {/* Arama ve Status Butonları */}
            <div className="flex justify-between items-center gap-2 mb-2">
                <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className='flex gap-3'>
                <Button onClick={() => handleStatusChange('CALISIYOR')} >Çalışanlar</Button>

                <Button onClick={() => handleStatusChange('AYRILDI')}>Ayrılanlar </Button>
                <Button className="!w-36 !bg-green-600 hover:!bg-green-800" onClick={()=>handleExcel()}>Excele Aktar</Button>

                </div>
                
                
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>                           
                            <th scope="col" className="px-6 py-2">Ad Soyad</th>
                            <th scope="col" className="px-6 py-2">Tc Kimlik No</th>
                            <th scope="col" className="px-6 py-2">Telefon</th>
                            <th scope="col" className="px-6 py-2">Görev</th>
                            <th scope="col" className="px-6 py-2">İşe Başlama T.</th>
                            <th scope="col" className="px-6 py-2">İzin Hakkı</th>
                            <th scope="col" className="px-6 py-2">Kalan İzin Hakkı</th>
                            <th scope="col" className="px-6 py-2">Açıklama</th>
                            <th scope="col" className="px-6 py-2">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map(personel => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-blue-rgb" key={personel.id}>
                                
                                <td scope="row" className="px-6 font-medium whitespace-nowrap text-red-600">{personel.firstName} {personel.lastName}</td>
                                <td className="px-6 py-2">{personel.ssnNumber}</td>
                                <td className="px-6 py-2">{personel.phone}</td>
                                <td className="px-6 py-2">{duty(personel.duty)}</td>
                                <td className="px-6 py-2">{formatDate(personel.startDate)}</td>
                                <td className="px-6 py-2">{personel.leaveDays}</td>
                                <td className="px-6 py-2">{personel.remainingLeaveDays}</td>
                                <td className="px-6 py-2">{personel.description}</td>
                                <td className="flex items-center px-6"><Link href={`/employee/edit/${personel.id}`}><FaPen /></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeeList;
