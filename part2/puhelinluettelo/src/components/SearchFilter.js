const SearchFilter = (props) => {
  return (
    <>
    <span>Fiter shown with </span>
      <input
        value={props.value}
        onChange={props.handler}
      />
    </>
  )
}

export default SearchFilter