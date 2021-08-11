const SingleCountry = ( {country} ) => {
  console.log(country)
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
    </>
  )
}

export default SingleCountry