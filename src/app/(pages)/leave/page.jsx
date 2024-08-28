"use client"
import React, { useEffect, useState } from 'react';
import LeaveList from './list';
import { getLeaves } from '@/business/leave';
import Header from '@/components/header';
import PageableButton from '@/components/pageable-button';

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
