import Header from "@/components/header";
import React from "react";
import AddEmployeeForm from "./form";
import dutyOptions from '@/helpers/duty-Types.json'

const AddEmploye = () => {
  return (
    <div>
      <Header headerTitle="Personel Ekle" />
      <AddEmployeeForm dutyOptions={dutyOptions}/>
    </div>
  );
};

export default AddEmploye;
