import { useState } from 'react'
import SingleCountry from './SingleCountry'

const CountryList = ( {filteredCountries} ) => {
  const [indexOfSelected, setIndexOfSelected] = useState('')
  
  const showOne = (index) => {
    setIndexOfSelected(index)
  }

  if (indexOfSelected === '') {
    return(
      <ul>
        {filteredCountries.map((country, index) => {
          return(
            <li key={country.alpha3code}>
              {country.name} <button onClick={() => showOne(index)}>Show</button>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <SingleCountry country={filteredCountries[indexOfSelected]} />
    )
  }
}

export default CountryList