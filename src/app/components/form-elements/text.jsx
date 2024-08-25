const Text = (props) => {
  const { refx, type, className, ...attr } = props;
  return (
    <>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900" text="dasd">{attr.placeholder}</label>
        <div className="mt-2">
          <input 
          type={type? type:'text'}
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          ref={refx}
          {...attr}/>
        </div>
      </div>
    </>
  );
};

export default Text;
