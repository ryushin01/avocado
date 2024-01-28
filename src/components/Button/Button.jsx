const Button = ({
  type = 'button',
  className = 'btn-default',
  content,
  onClick,
  color,
  ...props
}) => {
  return (
    <>
      <button
        type={type}
        className={`${className} ${
          color === 'primary' ? COLOR.primary : COLOR.grayscaleG
        } 
        ${color === 'secondary' ? COLOR.secondary : COLOR.grayscaleG}`}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    </>
  );
};

const COLOR = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  grayscaleG: 'bg-grayscaleG',
};

export default Button;
