const Input = ({
  type = 'text',
  placeholder,
  // name
  // onchange
  // disabled
  // error
  // value? defaultValue?
  // label
  //   onClick,

  id,
  value,
  isSeparate,
  maxLength,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        maxLength={maxLength}
        className="input"
        {...props}
      />
      {isSeparate && <label htmlFor={id}>{value}</label>}
    </>
  );
};

// const COLOR = {
//   primary: 'bg-primary',
//   secondary: 'bg-secondary',
//   grayscaleG: 'bg-grayscaleG',
// };

export default Input;
