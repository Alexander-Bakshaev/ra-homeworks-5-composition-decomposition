/** Горизонтальное меню навигации по разделам */
const NavigationTabs = ({ tabs }) => (
  <nav className="navigation-tabs">
    {tabs.map((tab, index) => (
      <a key={index} href={tab.link} className="tab-link">{tab.title}</a>
    ))}
  </nav>
);

export default NavigationTabs;
