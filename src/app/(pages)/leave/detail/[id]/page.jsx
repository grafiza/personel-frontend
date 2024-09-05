"use server"
import React from 'react'
import EmployeLeaveList from './list';
import { getLeavesByEmployee } from '@/business/leave';
import Header from '@/components/header';

const Page = async({params}) => {
    const leaveListByEmployee=await getLeavesByEmployee(params.id);

  return (
    <div>
      <Header headerTitle="Bütün İzinler"/>
        <EmployeLeaveList leaves={leaveListByEmployee}/>

    </div>
  )
}

export default Page