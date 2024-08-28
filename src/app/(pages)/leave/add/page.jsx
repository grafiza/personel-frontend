import Header from '@/components/header'
import React from 'react'
import AddLeaveForm from './form'
import { getEmployeeWithoutPageable } from '@/business/employee';

const AddLeave = async() => {
  const employee = await getEmployeeWithoutPageable(); 
  return (
    <div>
      <Header headerTitle="İzin Ekle" />
      <AddLeaveForm employee={employee}/>

    </div>
  )
}

export default AddLeave