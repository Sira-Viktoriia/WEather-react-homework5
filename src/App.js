import './App.css';
import Weather from './components/Weather.js';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Kyiv" />
      <footer>
        This project was creater by{" "}
        <a
          href="https://github.com/Sira-Viktoriia/weather-react-homework5"
          target="blank"
        >
          Sira Viktoriia
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Sira-Viktoriia/weather-react-homework5"
          target="blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
