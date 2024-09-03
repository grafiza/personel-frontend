import React from 'react'
import EditEmployeeForm from './form'
import { getIdEmployee } from '@/business/employee'
import Header from '@/components/header'
import dutyOptions from '@/helpers/duty-Types.json'
const EditEmployee = async ({ params }) => {
  const getEmployeeId = await getIdEmployee(parseInt(params.id))
  return (
    <>
    <Header headerTitle="Personel Düzenle" />
    <EditEmployeeForm getEmployee={getEmployeeId} dutyOptions={dutyOptions}/>

    </>
  )
}

export default EditEmployee

