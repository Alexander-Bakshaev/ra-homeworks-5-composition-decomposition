import { NewsItem } from './NewsItem';

/** 
 * Список новостей, использующий NewsItem
 * @param {Array} items - Массив новостей
 */
const NewsList = ({ items }) => (
  <ul className="news-list" role="list">
    {items.map((item, index) => (
      <NewsItem 
        key={index} 
        {...item} 
        ariaPosinset={index + 1}
        ariaSetsize={items.length}
      />
    ))}
  </ul>
);

export default NewsList;
