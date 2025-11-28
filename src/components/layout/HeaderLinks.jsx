import DateTimeDisplay from './DateTimeDisplay';

/** Навигационные ссылки в шапке сайта */
const HeaderLinks = () => (
  <div className="header-links">
    <a href="https://example.com/smi">Сейчас в СМИ</a>
    <a href="https://example.com/germany">в Германии</a>
    <a href="https://example.com/recommend">Рекомендуем</a>
    <DateTimeDisplay />
  </div>
);

export default HeaderLinks;
