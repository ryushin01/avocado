import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Gateway = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2900);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <main className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-40 bg-grayscaleB">
        <Link
          to="/main"
          className="w-28 h-28 bg-[url('/images/common/icon_power_on.png')] bg-cover bg-no-repeat bg-center text-[1px] text-grayscaleA/0 animate-bounce"
        >
          프로젝트 아보카도 바로 가기
        </Link>

        {/* <div className="flex flex-col gap-5 items-center px-5 lg:px-0">
          <span className="text-2xl lg:text-4xl text-grayscaleF">
            이곳은 포트폴리오 용도로 제작된 웹 사이트입니다.
          </span>
          <span className="text-2xl lg:text-4xl text-grayscaleF">
            아래 버튼 중 하나를 클릭하여 서비스를 체험해 주세요:D
          </span>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <Link
            to="/main"
            className="p-5 rounded-lg border border-grayscaleF bg-grayscaleF text-grayscaleB text-base lg:text-2xl text-center whitespace-nowrap opacity-90 hover:opacity-100 active:opacity-100"
          >
            서비스 이용하기
          </Link>
          <Link
            to="/signin"
            className="p-5 rounded-lg border border-grayscaleF bg-grayscaleB text-grayscaleF text-base lg:text-2xl text-center whitespace-nowrap opacity-90 hover:opacity-100 active:opacity-100"
          >
            로그인 후 이용하기
          </Link>
        </div> */}
      </main>
    </>
  );
};

export default Gateway;
