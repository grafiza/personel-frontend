const Button = (props) => {
  const { children, type, className, ...attr } = props;
  return (
    <button
    type={type ? type : ''}
      className={`flex items-center text-sm
         text-white justify-between cursor-pointer 
         hover:shadow-none hover:bg-blue-rgb
          bg-blue-rgb-2 w-auto h-auto p-2 rounded-md shadow-md  ${className}`}
      {...attr}
    >
      {children}
    </button>
  );
};

export default Button;
