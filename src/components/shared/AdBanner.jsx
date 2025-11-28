/** Рекламный баннер с изображением и ссылкой */
const AdBanner = ({ imageUrl, link }) => (
  <div className="ad-banner">
    <a href={link}>
      <img src={imageUrl} alt="Реклама" />
    </a>
  </div>
);

export default AdBanner;
