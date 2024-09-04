"use client"
import React, { useEffect, useState } from 'react';
import LeaveList from './list';
import { getLeaves } from '@/business/leave';
import Header from '@/components/header';
import PageableButton from '@/components/pageable-button';
import Button from '@/components/form-elements/button';
import * as XLSX from 'xlsx';
const Page = () => {
  const [leaves, setLeaves] = useState([]);
  const [page, setPage] = useState(0); // Başlangıç sayfası
  const [totalPages, setTotalPages] = useState(0); // Toplam sayfa sayısı
  const [pageSize, setPageSize] = useState(10); // Sayfa başına öğe sayısı

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const result = await getLeaves(page, pageSize);
        setLeaves(result.content);
        setTotalPages(result.totalPages); // Toplam sayfa sayısını güncelle
      } catch (error) {
        console.error('Failed to fetch leaves:', error);
      }
    };

    fetchLeaves();
  }, [page, pageSize]);
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(leaves);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leaves');
    XLSX.writeFile(wb, 'leaves.xlsx');
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Header
  headerTitle="İzin Listesi"
  buttons={[
    { title: "Personel Ekle", adres: "/employee/add" },
    { title: "İzin Ekle", adres: "/leave/add" }
  ]}
/>
      
      <LeaveList leaves={leaves} />
      <div className='flex mt-2 float-end w-full'>
      {/* <Button onClick={exportToExcel}>Export to Excel</Button>*/} 

      </div>
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

export default Page;
