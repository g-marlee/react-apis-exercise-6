import './App.css';
import { Quotes } from './components/quotes';
import { WeatherForecast } from './components/weatherforecast';

function App() {
  

  return (
    <div className="App">
      <WeatherForecast />
      <Quotes />
    </div>
  );
}

export default App;
