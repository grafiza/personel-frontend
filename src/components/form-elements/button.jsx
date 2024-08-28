const Button = (props) => {
  const { children, type, className, ...attr } = props;
  return (
    <button
    type={type ? type : ''}
      className={`flex items-center text-white justify-between cursor-pointer hover:shadow-none hover:bg-orange-500 bg-orange-400 w-auto h-auto p-2 rounded-md shadow-md  ${className}`}
      {...attr}
    >
      {children}
    </button>
  );
};

export default Button;
