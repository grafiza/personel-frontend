import Header from '@/app/components/header'
import React from 'react'
import AddEmployeeForm from './form'

const AddEmploye = () => {
    return (
        <div>
          <Header props={"Yeni Personel Ekle"} />
          <AddEmployeeForm/>
          

        </div>
    )
}

export default AddEmploye