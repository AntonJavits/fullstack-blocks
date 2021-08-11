import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import Output from './components/ConditionalOutput';

const App = () => {
  const [countries, setCountries] = useState([])
  const [findInput, setFindInput] = useState('')
  let filteredCountries = []

  const handleFindInput = (event) => {
    setFindInput(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response =>
        setCountries(response.data)
      )
  }, [])

  filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(findInput.toLowerCase())
  })
  
  return (
    <>
      <p>Find countries </p>
      <input
        value={findInput}
        onChange={handleFindInput}
      />
      <Output findInput={findInput} filteredCountries={filteredCountries} />
    </>
  )
}

export default App
