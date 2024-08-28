"use server"
import { responseMessage } from "../lib/utils/response-message";
import { revalidatePath } from "next/cache";
export const createLeave = async (formData) => {

  try {

    const data = {
      leaveStartDate: formData.get("leaveStartDate"),
      leaveEndDate: formData.get("leaveEndDate"),
      employee: {  
        id: parseInt(formData.get("employeeId"))
      },
      leaveType: formData.get("leaveType"),
      description:formData.get("description")
    };


    const res = await fetch("http://localhost:8080/leave",
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

    revalidatePath("/leave");
    return responseMessage(true, "İzin Başarıyla Eklendi", "");
  } catch (error) {
    return responseMessage(false, "İzin Ekleme Başarısız!", error.message);
  }
}


// update Leave
export const updateLeave = async (id, formData) => {
console.log("burası UPDATE LEAVE JS")
console.log("elave id : "+id)
  console.log("id:" + id, +"Form Data : " + formData)


  console.log(formData.get("employeeId"))
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
}
  try {
    const data = {
      leaveStartDate: formData.get("leaveStartDate"),
      leaveEndDate: formData.get("leaveEndDate"),
      employee: {  
        id: formData.get("employeeId")
      },
      leaveType: formData.get("leaveType"),
      description:formData.get("description")
    };

    const res = await fetch(`${process.env.BASE_URL}/leave/edit/${id}`, {
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


    revalidatePath("/leave");
    revalidatePath(`/leave/edit/${id}`);
    return responseMessage(true, "İzin Başarıyla Güncellendi.", result);
  } catch (error) {
    return responseMessage(
      false,
      "İzin Güncelleme Başarısız!",
      error.message
    );
  }
};


// Get Leave By Id
export const getLeaveById = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/leave/${id}`,{
      cache: 'no-store'
    });
    const result = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(result));
    }

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};


// Get All Leaves
export const getLeaves = async (page = 0, size = 10) => {
  try {
    const res = await fetch(`http://localhost:8080/leave?page=${page}&size=${size}`,{
      cache: 'no-store'
    });

    // Yanıtın başarılı olup olmadığını önce kontrol edin
    if (!res.ok) {
      throw new Error('API request failed');
    }

    const result = await res.json();
    return result;

  } catch (error) {
    throw new Error(error.message);
  }



};