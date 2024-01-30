const Button = ({ type = 'button', className, content, onClick, ...props }) => {
  return (
    <>
      <button
        type={type}
        className={`${className ? className : ''} btn-default`}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    </>
  );
};
export default Button;
