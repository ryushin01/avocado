const Filter = ({ filterData, switchOption }) => {
  return (
    <select
      onChange={switchOption}
      className="inline-flex pl-8 bg-[url('/images/common/icon_filter.png')] bg-6 bg-left-center bg-no-repeat lg:text-lg appearance-none"
    >
      {filterData.map(({ value, koreanValue }, index) => {
        return (
          <option key={index} value={value}>
            {koreanValue}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;
