import Input from '../Input/Input';

const InputWrap = ({ type = 'text', placeholder, id, value, maxLength }) => {
  return (
    <label htmlFor={id}>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        maxLength={maxLength}
      />
    </label>
  );
};

export default InputWrap;
