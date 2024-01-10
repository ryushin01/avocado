/**
 * ListItem props list
 * @property {number} ranking                - 아이템의 아이디를 정의합니다.
 * @property {number} yearReleased           - 아이템의 출시년도를 정의합니다.
 * @property {string} image                  - 아이템의 이미지url 데이터를 정의합니다.
 * @property {string} name                   - 아이템의 제목을 정의합니다.
 * @property {function} onClick              - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 */

const ListItem = ({
  ranking,
  image,
  name,
  yearReleased,
  onClick,
  ...props
}) => {
  return (
    <div className="w-full h-full bg-white lg:w-full" {...props}>
      <div className="flex w-full lg:w-full">
        <button
          type="button"
          className="relative w-full pb-[100%]"
          onClick={() => {
            onClick(ranking);
          }}
        >
          <img
            className="absolute top-0 w-full h-full aspect-square object-cover"
            src={image}
            alt={`${name}의 표지이미지`}
          />
        </button>
      </div>
      <div className="w-full">
        <button
          type="button"
          className="w-full py-5 px-4"
          onClick={() => {
            onClick(ranking);
          }}
        >
          <h3 className="text-[12px] font-bold text-left lg:text-[12px]">
            {name}
          </h3>
          <span className="text-[12px] block text-left lg:text-[12px]">
            {yearReleased}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
