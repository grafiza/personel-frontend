import Header from '@/components/header'
import React from 'react'
import AddLeaveForm from './form'
import { getEmployeeWithoutPageable } from '@/business/employee';
import leaveOptions from '@/helpers/leave-Types.json'
const AddLeave = async() => {
  const employee = await getEmployeeWithoutPageable();

  
  return (
    <div>
      <Header headerTitle="İzin Ekle" />
      <AddLeaveForm employee={employee} leaveOptions={leaveOptions} />
    </div>
  )
}

export default AddLeave
