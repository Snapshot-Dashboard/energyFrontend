import './App.css';
import { useState } from 'react'
import Nav from './Components/Nav/Nav';
import Ticker from './Components/Ticker/Ticker';
import TileTemplate from './Components/TileTemplate/TileTemplate';
import NewsColumns from './Components/News/NewsColumns';
import ComponentBar from './Components/ComponentBar/ComponentBar';

const App: React.FC = () => {
  // const [news, setNews] = useState<any[]>([])
  const [isActive, setIsActive] = useState<boolean>(false)
  const [dateValue, setDateValue] = useState<number>(90)

  return (
    <div className="App">

      <Nav
        isActive={isActive}
        setIsActive={setIsActive} />

      <Ticker />

      <TileTemplate
        dateValue={dateValue}
        setDateValue={setDateValue} />

      <NewsColumns
      />

    </div>
  );
}

export default App;
