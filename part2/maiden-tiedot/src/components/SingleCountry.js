// http://api.weatherstack.com/

import axios from 'axios'
import React, {useState, useEffect}  from 'react';

const SingleCountry = ( {country} ) => {
  const api_key = process.env.REACT_APP_API_KEY  
  console.log('api', api_key);
  
  const [weather, setWeather] = useState({
    temperature: '',
    wind: '',
    wind_dir: '',
    icon: ''
  })

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}&units=m`)
      .then(response => {
        let weatherData = {
          temperature: response.data.current.temperature,
          wind: response.data.current.wind_speed,
          wind_dir: response.data.current.wind_dir,
          icon: response.data.current.weather_icons[0]
        }
        setWeather(weatherData)
      })
  }, [api_key, country.capital])

  return(
    <>
      <h2>{country.name}</h2>
      <p>
        Capital: {country.capital}<br />
        Population: {country.population}
      </p>
      <h3>Languages</h3>
      <ul>
          {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}    
      </ul>
      <img src={country.flag} height="100" alt="Flag"/>
      
      <h3>Weather</h3>
      <ul>
        <li>temperature: {weather.temperature} Celsius</li>
        <li>wind: {weather.wind} m/s, direction {weather.wind_dir}</li>
        <li><img src={weather.icon} alt="weather icon" /></li>
      </ul>
    </>
  )
}

export default SingleCountry