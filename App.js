import './index.css';
import Widgets from './components/Widgets';
import Ads from './components/Ads';
import ExchangeRates from './components/ExchangeRates';
import Image from './components/Image';
import News from './components/News';
import Search from './components/Search';
import WeatherWidget from './components/Widgets/WeatherWidget';
import GermanMapWidget from './components/Widgets/GermanMapWidget';
import EtherWidget from './components/Widgets/EtherWidget';
import FavoritesWidget from './components/Widgets/FavoritesWidget';
import TVProgramWidget from './components/Widgets/TVProgramWidget';
import newsNames from './data/newsNames';
import newsCategories from './data/newsСategories';
import searchСategories from './data/searchСategories';
import currencyRates from './data/currencyRates';
import germanMapItems from './data/germanMapItems';
import ether from './data/ether';
import TVPrograms from './data/TVPrograms';
import favoritePages from './data/favoritePages';



function App() {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News newsCategories={newsCategories} newsNames={newsNames} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://picsum.photos/id/100/200"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className="App-body">
        <div className="App-wrapper">

          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://picsum.photos/id/700/1000"
            alt="Plug"
          />

        </div>
      </div>

      <footer className="App-footer">
        <div className="App-wrapper">

          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <GermanMapWidget
              title="Карта Германии"
              items={germanMapItems}
            />
            <EtherWidget
              title="Эфир"
              items={ether}
            />
            <FavoritesWidget
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgramWidget
              title="Телепрограмма"
              items={TVPrograms}
            />
          </Widgets>

        </div>
      </footer>
    </>
  );
}
export default App;