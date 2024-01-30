import Input from '../Input/Input';

const InputWrap = ({ type = 'text', placeholder, id, value, validation }) => {
  return (
    <label htmlFor={id}>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        validation={validation}
      />
    </label>
  );
};

export default InputWrap;
