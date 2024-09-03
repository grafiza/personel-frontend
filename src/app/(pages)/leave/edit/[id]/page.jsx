import { getLeaveById } from '@/business/leave'
import React from 'react'
import EditLeaveForm from './form'
import { getEmployeeWithoutPageable } from '@/business/employee'
import Header from '@/components/header'
import leaveOptions from '@/helpers/leave-Types.json'
const EditLeave = async ({params}) => {
  const getLeave=await getLeaveById(parseInt(params.id))
  const employee = await getEmployeeWithoutPageable(); 

  return (
    <>
    <Header headerTitle="İzin Düzenle" />
    <EditLeaveForm getLeave={getLeave} employeeList={employee} leaveOptions={leaveOptions} />
    </>
  )
}

export default EditLeave