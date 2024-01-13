/**
 * Button props list
 * @property {string} type: button                          - 버튼 타입을 정의합니다.
 * @property {string} color: primary, secondary             - 버튼 색상을 정의합니다.
 * @property {string} content                               - 버튼 내부 텍스트에 사용합니다.
 * @property {function} onClick                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 */

const Button = ({ type = 'button', className, content, onClick, ...props }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick} {...props}>
        {content}
      </button>
    </>
  );
};

export default Button;
