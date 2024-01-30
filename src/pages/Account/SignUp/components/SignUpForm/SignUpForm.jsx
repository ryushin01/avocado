import InputGroup from '../../../../../components/InputGroup/InputGroup';
import Button from '../../../../../components/Button/Button';

/* 
  1. 에러 메시지 > alert 처리
  2. 인증 번호 재발송
  3. 인증 번호 시간 제한  
  4. input number onWheel 이벤트 막기
  5. 필수 입력 범위 설정 required
  6. 중복 체크 버튼

  - 컴포넌트 개발 시 @apply 사용
  - 라디오 / 라디오 그룹
  - 아이디 저장 > 체크박스
  - 로그인 > 회원가입 링크 가기 생성
*/

const SignUpForm = () => {
  return (
    <form
      // onChange={aaa} onSubmit={bbb}
      className="lg:col-span-2"
    >
      <fieldset className="flex flex-col items-center gap-16">
        <legend className="w-full mb-8 text-xl tracking-tighter lg:pb-4 lg:border-b lg:border-solid lg:border-grayscaleB/10 lg:text-4xl">
          회원 가입
        </legend>
        <div className="flex flex-col gap-4 w-full">
          <InputGroup id="id" />
          <InputGroup type="password" id="password" />
          <InputGroup type="password" id="passwordRecheck" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <InputGroup id="name" />
          <InputGroup type="email" id="email" />
          <InputGroup type="number" id="phone" />
          <InputGroup type="number" id="certification" maxLength="6" />
        </div>
        <Button type="submit" content="회원 가입" className="btn-primary" />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
