import CountryList from "./CountryList"
import SingleCountry from "./SingleCountry"

const ConditionalOutput = ({ findInput, filteredCountries }) => {

  if (filteredCountries.length === 1) {
    return(
      <SingleCountry country={filteredCountries[0]} />
    )
  } else if (filteredCountries.length < 10 && filteredCountries.length > 0) {
    return(
      <CountryList filteredCountries={filteredCountries} />
    )
  } else if (findInput !== '' && filteredCountries.length > 10) {
    return(
      <p>Too many to show</p>
    )
  } else if (findInput !== '' && filteredCountries.length === 0) {
    return(
      <p>No countries found with current filter</p>
    )
  } else {
    return(
      <p>Enter filter</p>
    )
  }
}

export default ConditionalOutput