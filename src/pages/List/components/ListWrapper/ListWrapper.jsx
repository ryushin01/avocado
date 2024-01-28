import ListItem from '../ListItem/ListItem';

const ListWrapper = ({ boardgameData }) => {
  return (
    <section className="lg:col-span-4">
      <div className="bg-grayscaleG border border-solid border-grayscaleB rounded-lg lg:px-[60px] lg:py-[100px] lg:min-h-screen">
        <ul className="grid grid-cols-2 bg-grayscaleB bg-[url('/images/list/bg.png')] bg-50% md:grid-cols-3 md:bg-33% xl:grid-cols-4 xl:bg-25% 2xl:grid-cols-5 2xl:bg-20%">
          {boardgameData?.map(
            ({ ranking, yearReleased, image, name }, index) => {
              return (
                <li
                  key={index}
                  className="overflow-hidden rounded-lg border border-solid border-grayscaleB"
                >
                  <ListItem
                    ranking={ranking}
                    yearReleased={yearReleased}
                    image={image}
                    name={name}
                  />
                </li>
              );
            },
          )}
        </ul>
      </div>
    </section>
  );
};

export default ListWrapper;
