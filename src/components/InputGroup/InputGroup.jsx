import InputWrap from '../InputWrap/InputWrap';
import Input from '../Input/Input';
import Button from '../Button/Button';

const INFO_TEXT = {
  id: '영문, 숫자 조합 5~12자리를 입력해 주세요.',
  password: '영문, 숫자, 특수문자 조합 8~16자리를 입력해 주세요.',
};

const PLACEHOLDER_TEXT = {
  id: '아이디를 입력해 주세요.',
  password: '비밀번호를 입력해 주세요.',
  passwordRecheck: '동일한 비밀번호를 한 번 더 입력해 주세요.',
  name: '이름을 입력해 주세요.',
  email: '이메일 주소를 입력해 주세요.',
  phone: '휴대폰 번호를 -없이 입력해 주세요.',
  certification: '수신한 6자리 숫자를 입력해 주세요.',
};

const InputGroup = ({
  type = 'text',
  id,
  value,
  isSeparate,
  maxLength,
  aaa,
  ...props
}) => {
  return (
    <div className="input-group" {...props}>
      <div>
        {!isSeparate && (
          <InputWrap
            type={type}
            placeholder={PLACEHOLDER_TEXT[id]}
            id={id}
            value={value}
            maxLength={maxLength}
          />
        )}

        {isSeparate && (
          <Input
            type={type}
            placeholder={PLACEHOLDER_TEXT[id]}
            id={id}
            value={value}
            isSeparate={isSeparate}
            maxLength={maxLength}
          />
        )}
      </div>

      {id === 'id' && <Button className="floating" content="중복 확인" />}

      {id.includes('password') && (
        <button
          type="button"
          className={`btn-password-viewer ${aaa ? 'active' : ''}`}
        >
          비밀번호 표시
        </button>
      )}

      {id === 'phone' && <Button className="floating" content="인증" />}

      {id === 'certification' && (
        <div className="certification-area floating">
          <span>3:00</span>
          <Button content="재발송" />
        </div>
      )}

      {INFO_TEXT[id] && <span className="info-text">{INFO_TEXT[id]}</span>}
    </div>
  );
};

export default InputGroup;
