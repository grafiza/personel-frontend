import Header from "@/app/components/header";
import React from "react";
import AddEmployeeForm from "./form";

const AddEmploye = () => {
  console.log("AddEmploye Rendered");
  return (
    <div>
      <Header headerTitle="Personel Ekle" />
      <AddEmployeeForm />
    </div>
  );
};

export default AddEmploye;
