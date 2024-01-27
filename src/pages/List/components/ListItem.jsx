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
    <div className="relative w-full h-full bg-grayscaleG lg:w-full" {...props}>
      <div className="flex w-full lg:w-full">
        <button
          type="button"
          className="relative w-full pb-[150%] bg-grayscaleF text-left after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-b after:from-grayscaleF/0 after:to-grayscaleA/30"
          onClick={() => {
            onClick(ranking);
          }}
        >
          <img
            className="absolute top-0 w-full h-full p-4 object-contain"
            src={image}
            alt={`${name}의 표지이미지`}
          />
          <span className="flex flex-col items-start absolute left-0 bottom-0 right-0 z-10 p-5 text-grayscaleG">
            <h3 className="w-full font-bold truncate">{name}</h3>
            <span>{yearReleased}</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
