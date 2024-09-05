import { getLeave } from "@/business/main";
import Holidays from "./(pages)/holidays";

const Page = async ({ children }) => {
  const holidays = await getLeave();
  const tarih = new Date();
  const yil = tarih.getFullYear();
  const holidaysForYear = holidays[yil] || [];

  console.log(holidaysForYear + "+++++++++++++++++++++++");

  return (
    <>
      <Holidays holidays={holidaysForYear} />
      {children}
    </>
  );
}

export default Page;
