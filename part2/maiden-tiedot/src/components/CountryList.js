const CountryList = ( {filteredCountries} ) => {
  return(
    <ul>
      {filteredCountries.map(country => {
        return <li key={country.alpha3code}>{country.name}</li>
      })}
    </ul>
  )
}

export default CountryList