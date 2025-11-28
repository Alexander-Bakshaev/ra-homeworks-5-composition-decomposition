/** Поисковая строка с кнопкой поиска */
const SearchBar = ({ placeholder }) => (
  <div className="search-bar">
    <input type="text" placeholder={placeholder} />
    <button type="button">Найти</button>
  </div>
);

export default SearchBar;
