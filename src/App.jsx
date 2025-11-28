import {
  HeaderLinks, 
  NewsList, 
  CurrencyRate, 
  NavigationTabs,
  SearchBar, 
  AdBanner, 
  WeatherWidget, 
  PopularLinks, 
  TVProgram, 
  LiveBroadcast,
  ErrorCorrection,
  GermanyMap
} from "./components";

import {
  news,
  currency,
  navigation,
  weather,
  popular,
  tvprogram,
  broadcasts
} from "./data";

const App = () => {
  return (
    <div className="app" role="main">
      <header className="top-section" role="banner">
        <HeaderLinks />
      </header>
      
      <div className="main-content" role="region" aria-label="Основное содержимое">
        <div className="left-column">
          <div className="news-section">
            <NewsList items={news} />
            <ErrorCorrection />
          </div>
          <CurrencyRate rates={currency} />
          <NavigationTabs tabs={navigation} />
          <SearchBar placeholder="Найдется всё. Например, фаза луны сегодня" />
          <AdBanner imageUrl="/ad.png" link="#" />
        </div>
        
        <div className="right-column">
          <div className="right-subcolumn">
            <WeatherWidget data={weather} />
            <PopularLinks links={popular} />
          </div>
          
          <div className="right-subcolumn">
            <GermanyMap />
            <TVProgram programs={tvprogram} />
          </div>
          
          <div className="right-subcolumn">
            <LiveBroadcast broadcasts={broadcasts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
