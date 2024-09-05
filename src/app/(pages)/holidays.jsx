import { formatDate } from '@/helpers/config'
import React from 'react'

const Holidays = ({ holidays }) => {
    const tarih = new Date();
    const yil = tarih.getFullYear();
    console.log("holidays" + holidays)
    return (
        <div className='mt-4'>

            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead>
                    <tr>
                        <td colSpan={2} className='text-lg text-center text-blue-rgb-2 p-2 border-b  dark:border-gray-700'>{yil} İzin günleri</td>
                    </tr>
                </thead>
                <tbody>
                    {holidays && holidays
                        .sort((a, b) => new Date(a.date) - new Date(b.date)) 
                        .map((holiday, index) => {
                            const holidayDate = new Date(holiday.date);
                            const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
                            const dayName = dayNames[holidayDate.getDay()];

                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-blue-rgb"key={index}                                >
                                    <td scope="row" className="px-6 py-1 whitespace-nowrap" width={25}>{holiday.name}</td>
                                    <td scope="row" className="px-6 py-1 whitespace-nowrap">{formatDate(holiday.date)} - {dayName}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>


        </div>
    )
}

export default Holidays