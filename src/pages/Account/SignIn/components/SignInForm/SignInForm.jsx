import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { RegExp } from '@/RegExp';
import { API } from '@/config';
import { customAxios } from '@/modules/customAxios/customAxios';
import InputGroup from '@components/InputGroup/InputGroup';
import Checkbox from '@components/Checkbox/Checkbox';
import Button from '@components/Button/Button';

const SignInForm = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);
  const [isRemember, setIsRemember] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const verifyId = RegExp.ID.test(userInfo.id);
  const verifyPassword = RegExp.PASSWORD.test(userInfo.password);

  const typingMonitor = e => {
    const { id, value } = e.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const postUserInfo = async () => {
    const params = userInfo;

    if (!verifyId || !verifyPassword) {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
      return;
    }

    try {
      const response = await customAxios.post(API.SIGNIN, params);

      if (isRemember) {
        setCookie('rememberUserId', userInfo.id);
      } else {
        removeCookie('rememberUserId');
      }

      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/main');
      window.location.reload();
    } catch (error) {
      handleErrors(error.response.status);
    }
  };

  const handleErrors = status => {
    switch (status) {
      case 400:
        alert(`${status} 에러: 아이디 또는 비밀번호가 잘못되었습니다.`);
        break;
      case 404:
        alert(`${status} 에러: API Endpoint를 확인해 주세요.`);
        break;
      default:
        alert(`${status} 에러입니다.`);
    }
  };

  const togglePasswordViewer = () => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  const saveId = e => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie('rememberUserId', userInfo.id);
    } else {
      removeCookie('rememberUserId');
    }
  };

  const submitUserInfo = e => {
    e.preventDefault();
    postUserInfo();
  };

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserInfo({ ...userInfo, id: cookies.rememberUserId });
      setIsRemember(true);
    }

    document.body.style.overflow = '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={submitUserInfo} className="lg:col-span-2">
      <fieldset className="flex flex-col items-center gap-16">
        <legend className="w-full mb-8 text-xl tracking-tighter lg:pb-4 lg:border-b lg:border-solid lg:border-grayscaleB/10 lg:text-4xl">
          로그인
        </legend>
        <div className="flex flex-col gap-4 w-full lg:gap-8">
          <InputGroup
            id="id"
            value={userInfo.id || ''}
            onChange={typingMonitor}
            validation={`${
              userInfo.id === '' ? '' : verifyId ? 'done' : 'error'
            }`}
          />
          <InputGroup
            type={`${isHiddenPassword ? 'password' : 'text'}`}
            id="password"
            value={userInfo.password}
            onChange={typingMonitor}
            isHiddenPassword={isHiddenPassword}
            togglePasswordViewer={togglePasswordViewer}
            validation={`${
              userInfo.password === '' ? '' : verifyPassword ? 'done' : 'error'
            }`}
          />
          <Checkbox
            id="rememberId"
            content="아이디 저장"
            onChange={saveId}
            checked={isRemember}
          />
        </div>
        <Button type="submit" content="로그인" className="btn-primary" />
      </fieldset>
    </form>
  );
};

export default SignInForm;
