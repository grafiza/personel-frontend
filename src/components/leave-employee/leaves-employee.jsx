import { formatDate } from '@/helpers/config';
import React from 'react';

const LeavesEmployee = ({ leaves }) => {
    const bugun = new Date();

    // Bugün tarihiyle eşleşen izinleri filtrele
    const filteredLeaves = leaves.filter(leave => {
        const startDate = new Date(leave.leaveStartDate);
        const endDate = new Date(leave.leaveEndDate);

        // Eğer bugünün tarihi izin başlangıç veya bitiş tarihine eşitse ya da aradaysa
        return startDate <= bugun && endDate >= bugun;
    });

    console.log("Bugün izinli personeller:", filteredLeaves);

    return (
        <div className="w-2/4 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                İzinli Personeller - Tarih: {formatDate(bugun)}
            </h5>

            {filteredLeaves.length > 0 ? (
                filteredLeaves.map((leave) => (
                    <p key={leave.id} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {leave.employee.firstName} {leave.employee.lastName}
                    </p>
                ))
            ) : (
                <p className="font-normal text-gray-700 dark:text-gray-400">Bugün izinli personel yok.</p>
            )}
        </div>
    );
};

export default LeavesEmployee;
