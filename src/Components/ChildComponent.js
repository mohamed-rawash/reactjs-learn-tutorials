import React from 'react'

function ChildComponent(prop) {
  // return <button onClick={prop.greetHandler}>Greet Button</button>;
  // with params
  return <button onClick={() => prop.greetHandler("Child")}>Greet Button</button>;
}

export default ChildComponent