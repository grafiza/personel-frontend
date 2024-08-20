
import React from 'react'

const MainPage =async () => {
    const data = await fetch("http://localhost:8080/api/personel").then((res) =>
        res.json()
      ) 
      console.log(data)
  return (
    

<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Ad Soyad
                </th>
                <th scope="col" class="px-6 py-3">
                    Tc Kimlik
                </th>
                <th scope="col" class="px-6 py-3">
                    Telefon
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th><th scope="col" class="px-6 py-3">
                    Bölüm
                </th><th scope="col" class="px-6 py-3">
                    Görev
                </th>
                <th scope="col" class="px-6 py-3">
                    İzin Hakkı
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((personel=>(

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {personel.firstName} {personel.lastName}
                </th>
                <td class="px-6 py-4">
                    {personel.tc}
                </td>
                <td class="px-6 py-4">
                    {personel.phoneNumber}
                </td>
                <td class="px-6 py-4">
                    {personel.email}
                </td>
             
                <td class="px-6 py-4">
                    {personel.department}
                </td>
                <td class="px-6 py-4">
                {personel.role}
                </td>
                <td class="px-6 py-4">
                {personel.leaveRights}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>

            )))}
            
           
        </tbody>
    </table>
</div>

  )
}

export default MainPage