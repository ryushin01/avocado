const Checkbox = ({ id, content, onChange, checked }) => {
  return (
    <span className="checkbox-wrap">
      <input
        type="checkbox"
        id={id}
        className="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{content}</label>
    </span>
  );
};
export default Checkbox;
