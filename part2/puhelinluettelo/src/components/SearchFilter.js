const SearchFilter = (props) => {
  return (
    <>
    <span>Fiter shown with </span>
      <input
        value={props.value}
        onChange={props.handler}
      />
      {props.value !== '' && <button onClick={props.resetHandler}>Clear</button>}
    </>
  )
}

export default SearchFilter