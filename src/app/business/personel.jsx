
import React from 'react';
import Header from '../components/header';
import Link from 'next/link';

const Personel = async () => {
    const res = await fetch('http://localhost:8080/employee', { cache: 'no-store' });
    const data = await res.json();

    const content = data.content;

    if (!Array.isArray(content)) {
        console.error('Content is not an array', content);
        return <div>Error: Content is not in expected format.</div>;
    }
    return (
        <>
        <Header props={"PERSONELLER"}/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ad Soyad
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tc Kimlik No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Telefon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Görev
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    İşe Başlama T.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    İzin Hakkı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kalan İzin Hakkı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map((personel => (

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={personel.id}>
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {personel.firstName} {personel.lastName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {personel.ssnNumber}
                                    </td>
                                    <td className="px-6 py-4">
                                        {personel.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {personel.duty}
                                    </td>
                                    <td className="px-6 py-4">
                                        {personel.startDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {personel.leaveDays}
                                    </td>
                                    <td className="px-6 py-4">
                                        {personel.remainingLeaveDays}
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Düzenle</Link>
                                    </td>
                                </tr>
                            )))}
                            <div>

                            </div>

                        </tbody>
                    </table>
                </div>



            </div>
        </>
    );
};

export default Personel;
