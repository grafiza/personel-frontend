const Button = (props) => {
  const { children, type, className, ...attr } = props;
  return (
    <button
    type={type ? type : ''}
      className={`flex items-center justify-between w-full h-14 rounded-[5px] px-4 cursor-pointer outline-none bg-comet ${className}`}
      {...attr}
    >
      {children}
    </button>
  );
};

export default Button;
