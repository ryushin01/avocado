const Footer = () => {
  return (
    <footer>
      <div className="px-5 py-[60px] rounded-t-lg border border-solid border-grayscaleB bg-grayscaleG tracking-tighter lg:p-[60px]">
        <ul className="flex items-center gap-5">
          <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
            아보카도 소개
          </li>
          <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
            개인정보 처리방침
          </li>
          <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
            이용약관
          </li>
          <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
            고객센터
          </li>
        </ul>
        <ul className="mt-5 lg:mt-10">
          <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
            (주)아보카도
          </li>
          <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
            대표자: 류창선
          </li>
          <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
            주소: 서울특별시 중구 한강대로 416 위워크 서울스퀘어점
          </li>
          <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
            대표전화: 0000-0000
          </li>
          <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
            이메일: help@avocado.com
          </li>
        </ul>
        <span className="block mt-5 lg:mt-10 text-[11px] lg:text-base text-grayscaleB tracking-[-0.4px]">
          COPYRIGHT© 2024 AVOCADO. ALL RIGHT RESERVED
        </span>
      </div>
    </footer>
  );
};

export default Footer;
