"use client"
import React, { useEffect, useState } from 'react';
import EmployeeList from './list';
import { getEmployee } from '@/business/employee';
import Header from '@/components/header';
import PageableButton from '@/components/pageable-button';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0); // Başlangıç sayfası
  const [totalPages, setTotalPages] = useState(0); // Toplam sayfa sayısı
  const [pageSize, setPageSize] = useState(10); // Sayfa başına öğe sayısı

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const result = await getEmployee(page, pageSize);
        setEmployees(result.content);
        setTotalPages(result.totalPages); // Toplam sayfa sayısını güncelle
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };

    fetchEmployees();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Header
  headerTitle="Personel Listesi"
  buttons={[
    { title: "Personel Ekle", adres: "/employee/add" },
    { title: "İzin Ekle", adres: "/leave/add" }
  ]}
/>
      <EmployeeList employee={employees} />
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (

          <PageableButton
            key={index}
            onClick={() => handlePageChange(index)}
            isActive={index === page}
          >
            {index + 1}
          </PageableButton>
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
