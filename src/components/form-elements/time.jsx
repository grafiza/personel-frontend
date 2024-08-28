const Time = (props) => {
  const { className, ...attr } = props;
  return (
    <input
      type="time"
      className={`w-full h-14 rounded-[5px] px-4 outline-none text-galaxy ${className}`}
      {...attr}
    />
  );
};

export default Time;
