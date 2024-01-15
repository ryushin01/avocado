/**
 * Button props list
 * @property {string} className: btn-default                - 버튼의 클래스 이름을 정의합니다.
 * @property {string} type: button                          - 버튼 타입을 정의합니다.
 * @property {string} color: primary, secondary             - 버튼 색상을 정의합니다.
 * @property {string} content                               - 버튼 내부 텍스트에 사용합니다.
 * @property {function} onClick                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 */

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
