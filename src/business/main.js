"use server"

export const getLeave = async () => {
    try {
      const res = await fetch("http://localhost:8080/holidays", {
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