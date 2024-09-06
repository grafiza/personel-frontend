import { formatDate } from '@/helpers/config'
import React from 'react'

const Holidays = ({ holidays }) => {
    const tarih = new Date();
    const yil = tarih.getFullYear();
    return (
        <div class="w-2/4 p-6 bg-acik-gri border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{yil} İzin günleri</h5>
            <table className="text-sm text-left rtl:text-right dark:text-gray-400 w-full">

                <tbody>
                    {holidays && holidays
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map((holiday, index) => {
                            const holidayDate = new Date(holiday.date);
                            const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
                            const dayName = dayNames[holidayDate.getDay()];

                            return (
                                <tr className="dark:bg-gray-800 hover:text-blue-rgb" key={index}                                >
                                    <td scope="row" className="py-1 whitespace-nowrap" >{holiday.name}</td>
                                    <td scope="row" className="py-1 whitespace-nowrap">{formatDate(holiday.date)} - {dayName}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>


        </div>
    )
}

export default Holidays