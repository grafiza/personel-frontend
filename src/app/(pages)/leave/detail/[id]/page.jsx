"use server"
import React from 'react'
import EmployeLeaveList from './list';
import { getLeavesByEmployee } from '@/business/leave';

const Page = async({params}) => {
    const leaveListByEmployee=await getLeavesByEmployee(params.id);

    console.log(leaveListByEmployee+"page sayfasında geliyor");
  return (
    <div>
        <EmployeLeaveList leaves={leaveListByEmployee}/>

    </div>
  )
}

export default Page