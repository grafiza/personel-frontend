import React from 'react'
import EditEmployeeForm from './form'
import { getIdEmployee } from '@/business/employee'
import Header from '@/components/header'

const EditEmployee = async ({ params }) => {
  const getEmployeeId = await getIdEmployee(parseInt(params.id))
  return (
    <>
    <Header headerTitle="Personel Düzenle" />
    <EditEmployeeForm getEmployee={getEmployeeId} />

    </>
  )
}

export default EditEmployee

