import { FaPlus } from "react-icons/fa6";

const File = (props) => {
  const { className, ...attr } = props;
  return (
    <label className="w-fit block cursor-pointer">
      <input type="file" className="appearance-none hidden" {...attr} multiple />
      <div className={`bg-comet w-14 h-14 rounded-[5px] text-moon flex justify-center items-center ${className}`}>
        <FaPlus />
      </div>
    </label>
  );
};

export default File;
