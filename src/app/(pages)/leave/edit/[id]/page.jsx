import { getLeaveById } from '@/business/leave'
import React from 'react'
import EditLeaveForm from './form'
import { getEmployeeWithoutPageable } from '@/business/employee'
import Header from '@/components/header'

const EditLeave = async ({params}) => {
  const getLeave=await getLeaveById(parseInt(params.id))
  const employee = await getEmployeeWithoutPageable(); 

  console.log("employee ne geliyor:"+employee)
  return (
    <>
    <Header headerTitle="İzin Düzenle" />
    <EditLeaveForm getLeave={getLeave} employeeList={employee}/>
    </>
  )
}

export default EditLeave