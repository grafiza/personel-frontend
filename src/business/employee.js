"use server"
import { responseMessage } from "../lib/utils/response-message";
import { revalidatePath } from "next/cache";
export const createEmployee = async (formData) => {
  try {
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      ssnNumber: formData.get("ssnNumber"),
      phone: formData.get("phone"),
      duty: formData.get("duty"),
      startDate: formData.get("startDate"),
      description:formData.get("description"),
      status: "CALISIYOR"
    };
    
    const res = await fetch("http://localhost:8080/employee",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      },
      { cache: "no-store" });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(JSON.stringify(result));
    }

    revalidatePath("/employee");
    return responseMessage(true, "Yeni Personel Başarıyla Eklendi", "");
  } catch (error) {
    return responseMessage(false, "Personel Ekleme Başarısız!", error.message);
  }
}


// update 
export const updateEmployee = async (id, formData) => {

  console.log("id:"+id,+"Form Data : "+formData)
  try {
    const data = {
      id: id,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      ssnNumber: formData.get("ssnNumber"),
      phone: formData.get("phone"),
      duty: formData.get("duty"),
      startDate:formData.get("startDate"),
      status: formData.get("status"),
      description:formData.get("description")
    };

    const res = await fetch(`${process.env.BASE_URL}/employee/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",

      },
    });
    const result = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(result));
    }


    revalidatePath("/employee");
    revalidatePath(`/employee/edit/${id}`);
    return responseMessage(true, "Personel Başarıyla Güncellendi.", result);
  } catch (error) {
    return responseMessage(
      false,
      "Personel Güncelleme Başarısız!",
      error.message
    );
  }
};


// Get Employee By Id
export const getIdEmployee = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/employee/${id}`,{cache: 'no-store'});
    const result = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(result));
    }

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEmployee = async (page = 0, size = 10) => {
  try {
    const res = await fetch(`http://localhost:8080/employee?page=${page}&size=${size}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('API request failed');
    }

    const result = await res.json();
    return result; // Tüm pageable verileri döndür
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw new Error(error.message || 'An error occurred while fetching employee data');
  }
};
export const getEmployeeWithoutPageable = async () => {
  try {
    const res = await fetch("http://localhost:8080/employee", {
      cache: 'no-store'
    });

    // Yanıtın başarılı olup olmadığını önce kontrol edin
    if (!res.ok) {
      throw new Error('API request failed');
    }

    const result = await res.json();
    return result.content;

  } catch (error) {
    throw new Error(error.message);
  }
};
