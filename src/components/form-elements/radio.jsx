const Radio = (props) => {
  const { className, ...attr } = props;
  return (
    <input
      type="radio"
      className={`w-5 h-5 outline-none accent-comet ${className}`}
      {...attr}
    />
  );
};

export default Radio;
