import './App.css';
import { useState, useEffect } from 'react'
import Nav from './Components/Nav/Nav';
import Ticker from './Components/Ticker/Ticker';
import TileTemplate from './Components/TileTemplate/TileTemplate';
import NewsColumns from './Components/News/NewsColumns';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {

  ReactGA.initialize("G-30644SKVVK");

  // const [news, setNews] = useState<any[]>([])
  const [isActive, setIsActive] = useState<boolean>(false)
  const [dateValue, setDateValue] = useState<number>(90)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">

      <Nav
        isActive={isActive}
        setIsActive={setIsActive} />

      <Ticker />

      <TileTemplate
        dateValue={dateValue}
        setDateValue={setDateValue} />

      <NewsColumns />

    </div>
  );
}

export default App;
