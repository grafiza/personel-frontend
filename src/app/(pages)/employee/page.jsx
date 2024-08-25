
import EmployeeList from './list';
import { getEmployee } from '@/app/business/employee';

const Page = async() => {
  const data = await getEmployee(); 

 

  return (
    <div className='mt-7'>
        <EmployeeList employee={data}/>
    </div>
  );
};

export default Page;
