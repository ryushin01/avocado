import { useNavigate } from 'react-router-dom';

const ListItem = ({ ranking, image, name, yearReleased, ...props }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${ranking}`, {
      state: { ranking: ranking },
    });
  };

  return (
    <div className="relative w-full h-full bg-grayscaleG lg:w-full" {...props}>
      <div className="flex w-full lg:w-full">
        <button
          type="button"
          className="relative w-full pb-[150%] bg-grayscaleF text-left after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-b after:from-grayscaleF/0 after:to-grayscaleA/30"
          onClick={goToDetail}
        >
          <img
            className="absolute top-0 w-full h-full p-4 object-contain"
            src={image}
            alt={`${name}의 표지이미지`}
          />
          {ranking <= 10 && (
            <img
              src="/avocado/images/common/icon_top_ten.png"
              alt="10위권 표시 아이콘"
              className="absolute top-2 left-2 w-10 h-10"
            />
          )}
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
