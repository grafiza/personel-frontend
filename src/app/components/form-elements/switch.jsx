const Switch = (props) => {
  const { className, ...attr } = props;
  return (
    <label className="flex w-fit cursor-pointer">
      <input
        type="checkbox"
        className={`appearance-none peer`}
        {...attr}
      />
      <div className={`relative w-[81px] h-12 bg-moon rounded-full peer-checked:after:translate-x-[100%] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-nebula after:rounded-full after:h-11 after:w-11 after:transition-all peer-checked:bg-comet ${className}`}></div>
    </label>
  );
};

export default Switch;
