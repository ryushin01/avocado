// 로그인 / 회원가입 링크 위치는 어디로 할 것인가?

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import InputGroup from '../../../../../components/InputGroup/InputGroup';
import Checkbox from '../../../../../components/Checkbox/Checkbox';
import Button from '../../../../../components/Button/Button';

const SignInForm = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);
  const [isRemember, setIsRemember] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const idRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,12}$/;
  const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  const verifyId = idRegExp.test(userInfo.id);
  const verifyPassword = passwordRegExp.test(userInfo.password);

  const typingMonitor = e => {
    const { id, value } = e.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const submitUserInfo = e => {
    e.preventDefault();

    // navigate('/main');
  };

  const togglePasswordViewer = () => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  const handleOnChange = e => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie('rememberUserId', userInfo.id);
    } else {
      removeCookie('rememberUserId');
    }
  };

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      console.log('worked');
      setUserInfo({ ...userInfo, id: cookies.rememberUserId });
      setIsRemember(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // value는 고정, defaultValue는 유동

  return (
    <form
      onChange={typingMonitor}
      onSubmit={submitUserInfo}
      className="lg:col-span-2"
    >
      <fieldset className="flex flex-col items-center gap-16">
        <legend className="w-full mb-8 text-xl tracking-tighter lg:pb-4 lg:border-b lg:border-solid lg:border-grayscaleB/10 lg:text-4xl">
          로그인
        </legend>
        <div className="flex flex-col gap-4 w-full lg:gap-8">
          <InputGroup
            id="id"
            value={userInfo.id}
            validation={`${
              userInfo.id === '' ? '' : verifyId ? 'done' : 'error'
            }`}
          />
          <InputGroup
            type={`${isHiddenPassword ? 'password' : 'text'}`}
            id="password"
            value={userInfo.password}
            isHiddenPassword={isHiddenPassword}
            togglePasswordViewer={togglePasswordViewer}
            validation={`${
              userInfo.password === '' ? '' : verifyPassword ? 'done' : 'error'
            }`}
          />
          <Checkbox
            id="rememberId"
            content="아이디 저장"
            onChange={handleOnChange}
            checked={isRemember}
          />
        </div>
        <Button type="submit" content="로그인" className="btn-primary" />
      </fieldset>
    </form>
  );
};

export default SignInForm;
