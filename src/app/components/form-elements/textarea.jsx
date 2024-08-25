const Textarea = (props) => {
  const { className, children, ...attr } = props;
  return (
    <textarea
      className={`w-full block rounded-[5px] p-4 outline-none resize-none text-galaxy ${className}`}
      {...attr}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
