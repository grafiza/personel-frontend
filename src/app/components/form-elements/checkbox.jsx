const Checkbox = (props) => {
  const { className, ...attr } = props;
  return (
    <input
      type="checkbox"
      className={`w-5 h-5 outline-none accent-comet ${className}`}
      {...attr}
    />
  );
};

export default Checkbox;
