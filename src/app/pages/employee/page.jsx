"use client";

import React, { useState, useEffect } from 'react';
import EmployeeList from './list';
import { getEmployee } from '@/app/business/employee';

const Page = () => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // async/await'i useEffect içinde kullanıyoruz
    async function fetchData() {
      const data = await getEmployee();
      setEmployee(data);
    }
    
    fetchData();
  }, []); // boş bağımlılık dizisi: bileşen yüklendiğinde bir kez çalışır

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className='mt-7'>
        <EmployeeList employee={employee}/>
    </div>
  );
};

export default Page;
