import SinglePerson from "./SinglePerson"

const Persons = ({ personsToShow }) => {  
  return (
    <>
    {personsToShow.map(person => 
      <SinglePerson key={person.name} name={person.name} number={person.number} />
    )}
    </>
  )
}

export default Persons