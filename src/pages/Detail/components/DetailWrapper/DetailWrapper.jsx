import { ReactComponent as IconAverage } from '@images/common/icon_average.svg';
import { ReactComponent as IconRanking } from '@images/common/icon_ranking.svg';
import { ReactComponent as IconWeight } from '@images/common/icon_weight.svg';

const DetailWrapper = ({
  ranking,
  bggId,
  blId,
  name,
  englishName,
  image,
  yearReleased,
  players,
  best,
  playingTime,
  minAge,
  average,
  averageWeight,
  processedDesignerData,
  processedTypeData,
  processedCategoryData,
}) => {
  return (
    <section className="lg:col-span-6">
      <div className="flex flex-col gap-20 p-5 bg-grayscaleG border border-solid border-grayscaleB rounded-lg lg:px-[60px] lg:py-[100px] lg:min-h-screen lg:justify-between lg:gap-40">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-5 flex-1">
            <div className="relative overflow-hidden rounded-lg">
              <img src={image} alt={name} className="" />
              {ranking <= 10 && (
                <img
                  src="/avocado/images/common/icon_top_ten.png"
                  alt="10위권 표시 아이콘"
                  className="absolute top-2 left-2 w-10 h-10"
                />
              )}
            </div>
            <div className="py-5 bg-grayscaleB text-grayscaleF rounded-lg">
              <ul className="grid col-gap grid-cols-3 text-center">
                <li
                  className="flex gap-2 justify-center items-center"
                  title="이것은 순위를 의미합니다."
                >
                  <IconRanking className="w-8 h-8" />
                  <span className="text-lg text-bold">{ranking}</span>
                </li>
                <li
                  className="flex gap-2 justify-center items-center relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[1px] before:h-3 before:bg-grayscaleG/20 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-[1px] after:h-3 after:bg-grayscaleG/20"
                  title="이것은 평균 평점을 의미합니다."
                >
                  <IconAverage className="w-8 h-8" />
                  <span
                    className={`text-lg text-bold ${
                      average > 8
                        ? 'text-bggHigh'
                        : average > 7
                          ? 'text-bggLow'
                          : ''
                    }`}
                  >
                    {average}
                  </span>
                </li>
                <li
                  className="flex gap-2 justify-center items-center"
                  title="이것은 평균 난이도를 의미합니다."
                >
                  <IconWeight className="w-8 h-8" />
                  <span
                    className={`text-lg text-bold ${
                      averageWeight > 4
                        ? 'text-bggHeavy'
                        : averageWeight > 3
                          ? 'text-bggMedium'
                          : averageWeight > 1
                            ? 'text-bggLight'
                            : ''
                    }`}
                  >
                    {averageWeight}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-20 flex-2">
            <div className="flex flex-col gap-5">
              <h3 className="font-bold lg:text-3xl">게임 정보</h3>
              <ul className="flex flex-col gap-2 text-sm lg:text-lg">
                <li>
                  게임명: {name} ({englishName})
                </li>
                <li>디자이너: {processedDesignerData}</li>
                <li>출시년도: {yearReleased}년</li>
                <li>장르: {processedTypeData}</li>
                <li>카테고리: {processedCategoryData}</li>
                <li>플레이 인원: {players}명</li>
                <li>적정 인원: {best}명</li>
                <li>플레이 타임: {playingTime}분</li>
                <li>권장 최소 나이: {minAge}세</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-bold lg:text-3xl">구매처 목록</h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <li className="h-20 p-5 border border-solid border-grayscaleB/10">
                  <a
                    href="https://divedice.com/shop/big_section.php?cno1=2147"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://divedice.com/_skin/divedice_221124/img/logo/logo.png"
                      alt="다이브다이스 로고"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </li>
                <li className="h-20 p-3 border border-solid border-grayscaleB/10">
                  <a
                    href="https://smartstore.naver.com/boardpia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://shop-phinf.pstatic.net/20190208_69/ncp_1npgei_01_15496135238572daPi_PNG/5ea945b1-5e9f-4c11-a501-c64217c54cae.png?type=w640"
                      alt="보드피아 로고"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </li>
                <li className="h-20 p-3 border border-solid border-grayscaleB/10">
                  <a
                    href="https://popcone.co.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://popcontr2632.cdn-nhncommerce.com/data/skin/front/moment_popcone/img/banner/ac8fe04d443dfa54e784a44f59f7d0b4_63174.png"
                      alt="팝콘 로고"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </li>
                <li className="h-20 border border-solid border-grayscaleB/10">
                  <a
                    href="https://boardm.co.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://boardm.co.kr/upload/design/bannerimg_1679449752_0.png"
                      alt="보드엠 로고"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-10 lg:before:content-[''] lg:before:flex-1">
          <div className="flex flex-2 gap-5">
            <a
              href={`https://boardgamegeek.com/boardgame/${bggId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center flex-1 p-5 rounded-lg bg-primary/90 text-lg font-bold text-grayscaleG hover:bg-primary active:bg-primary"
            >
              보드게임긱
            </a>
            <a
              href={`https://boardlife.co.kr/bbs_detail.php?bbs_num=${blId}&tb=boardgame_strategy`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center flex-1 p-5 rounded-lg bg-secondary/90 text-lg font-bold text-grayscaleG hover:bg-secondary active:bg-secondary"
            >
              보드라이프
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWrapper;
