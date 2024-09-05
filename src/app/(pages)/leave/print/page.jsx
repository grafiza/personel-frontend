"use client"
import Modal from '@/components/modal';
import PrintForm from '@/app/(pages)/leave/print/print-form';
import React, { useEffect, useState } from 'react';



const PrintLeavePage = () => {
  const [leaveData, setLeaveData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // sessionStorage'dan leaveData verisini al ve state'e kaydet
    const data = sessionStorage.getItem('leaveData');
    if (data) {
      setLeaveData(JSON.parse(data));
    }
  }, []); // Boş bir bağımlılık dizisi, sadece component mount olduğunda çalışır
  
  useEffect(() => {
    // leaveData yüklendikten sonra modal'i aç
    if (leaveData) {
      setIsModalOpen(true);
    }
  }, [leaveData]); // leaveData değiştiğinde bu etki çalışır
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!leaveData) {
    return <div>Veri yükleniyor...</div>;
  }

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <PrintForm getLeave={leaveData} />
      
    </Modal>
  );
};

export default PrintLeavePage;
