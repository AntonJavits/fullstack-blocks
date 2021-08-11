const PersonForm = (props) => {

  return (
      <form onSubmit={props.addPerson}>
        <div>
          <span>Name: </span>
          <input
            value={props.newName}
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          <span>Number: </span>
          <input
            value={props.newNumber}
            onChange={props.handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
  )
}

export default PersonForm