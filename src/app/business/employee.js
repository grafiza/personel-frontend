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
      status: "CALISIYOR"
    };
    console.log(data.firstName)
    console.log("yol neymiş: -----------------" + process.env.BASE_URL)
    const res = await fetch("//localhost:8080/employee",
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

    revalidatePath("/pages/employee");
    return responseMessage(true, "Yeni Personel Başarıyla Eklendi", result);
  } catch (error) {
    return responseMessage(false, "Personel Ekleme Başarısız!", error.message);
  }
}


// update 
export const updateEmployee = async (id, path, formData) => {
  try {


    const data = {
      id: id,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      ssnNumber: formData.get("ssnNumber"),
      phone: formData.get("phone"),
      duty: formData.get("duty"),
      status: formData.get("status"),
    };

    const res = await fetch(`${process.env.BASE_URL}/employee/${id}`, {
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


// Category ID Get
export const getIdEmployee = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/employee/${id}`);
    const result = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(result));
    }

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEmployee = async () => {
  try {
    const res = await fetch("http://localhost:8080/employee");

    // Yanıtın başarılı olup olmadığını önce kontrol edin
    if (!res.ok) {
      throw new Error('API request failed');
    }

    const result = await res.json();
    console.log(result.content)
    return result.content;

  } catch (error) {
    throw new Error(error.message);
  }



};