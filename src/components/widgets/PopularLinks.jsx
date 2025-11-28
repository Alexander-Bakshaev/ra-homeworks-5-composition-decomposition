/** Блок "Посещаемое" со списком популярных ссылок */
const PopularLinks = ({ links }) => (
  <div className="popular-links">
    <h3>Посещаемое</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.title}</a> — {link.description}
        </li>
      ))}
    </ul>
  </div>
);

export default PopularLinks;
