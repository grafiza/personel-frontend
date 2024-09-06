import { getLeave } from "@/business/main";
import Holidays from "./(pages)/holidays";
import LeavesEmployee from "@/components/leave-employee/leaves-employee";
import { getAllLeaves } from "@/business/leave";

const Page = async ({ children }) => {
  const holidays = await getLeave();
  const leaves=await getAllLeaves();
  const tarih = new Date();
  const yil = tarih.getFullYear();
  const holidaysForYear = holidays[yil] || [];

 

  return (
    <div className="flex gap-6 mt-4 ">
      <Holidays holidays={holidaysForYear} />
      <LeavesEmployee leaves={leaves}/>
      {children}
    </div>
  );
}

export default Page;
