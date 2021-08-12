import SinglePerson from "./SinglePerson"

const Persons = ({ personsToShow, handleDelete }) => {  
  return (
    <>
    {personsToShow.map(person => 
      <SinglePerson key={person.id} name={person.name} number={person.number} id={person.id} handleDelete={handleDelete} />
    )}
    </>
  )
}

export default Persons