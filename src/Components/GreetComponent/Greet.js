function Greet({name, lName, children}) {
  return (
    <div className="Greet">
      <h1>This The First Component In Reactjs</h1>
      <p>
        My name is: {name} {lName}
      </p>
      {children}
    </div>
  );
}

export default Greet;
