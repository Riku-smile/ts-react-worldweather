import './assets/App.css';
import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form'
import Loading from './components/Loading'
import Results from './components/Results'
import Title from './components/Title'

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e:any) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`https://api.weatherapi.com/v1/current.json?key=717a48bb37a84710b5e61133210605&q=${city}&aqi=no`)
    .then(res => {setResults({
      country: res.data.location.country,
      cityName: res.data.location.name,
      temperature: res.data.current.temp_c,
      conditionText: res.data.current.condition.text,
      icon: res.data.current.condition.icon
      })
      setCity("");
      setLoading(false);
    })
    .catch(err => alert("エラーが発生しました。もう一度挑戦してください。"));
  }

  return (
    <div className="app">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} city={city} />
      { loading ? <Loading /> : <Results results={results} /> }
    </div>
  );
}

export default App;
