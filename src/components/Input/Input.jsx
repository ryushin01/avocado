const Input = ({
  type = 'text',
  placeholder,
  id,
  value,
  isSeparate,
  validation,
  onChange,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className={`${validation ? validation : ''} input`}
        {...props}
      />
      {isSeparate && <label htmlFor={id}>{value}</label>}
    </>
  );
};

export default Input;
