import PropTypes from 'prop-types';

/** 
 * Элемент списка новостей с иконкой, текстом и ссылкой
 * @param {string} icon - URL иконки (опционально)
 * @param {string} text - Текст новости
 * @param {string} link - Ссылка на новость
 */
export const NewsItem = ({ icon, text, link }) => (
  <li className="news-item" role="listitem">
    {icon && <img src={icon} alt="" className="news-icon" aria-hidden="true" />}
    <a href={link} className="news-link" aria-label={text}>
      {text}
    </a>
  </li>
);

NewsItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
