const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notification error">
      {message}
    </div>
  )
}

export default Notification