const SinglePerson = ({ name, number, id, handleDelete }) => {
  
  return (
    <div>{name} {number} <button onClick={() => handleDelete(id)}>Delete</button></div>  
  )
}

export default SinglePerson