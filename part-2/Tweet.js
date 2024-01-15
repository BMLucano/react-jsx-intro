function Tweet({ username, name, date, message }) {

  const myStyles = {
    color: "pink",
    backgroundColor: "beige"
  };

  return (
    <div>
      <p style={myStyles}>Username: {username}</p>
      <p style={myStyles}>Name: {name}</p>
      <p style={myStyles}>Date: {date}</p>
      <b style={myStyles}>Message: {message}</b>
    </div>
  );
}