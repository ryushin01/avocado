import Input from '../Input/Input';

const InputWrap = ({
  type = 'text',
  placeholder,
  id,
  value,
  validation,
  onChange,
}) => {
  return (
    <label htmlFor={id}>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        validation={validation}
        onChange={onChange}
      />
    </label>
  );
};

export default InputWrap;
