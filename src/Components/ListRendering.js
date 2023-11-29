import React, { Fragment } from 'react'

function ListRendering() {
  const names = ["Mooo", "Rooo", "Sooo", "Givara", "Ma3'raa"];

  return <Fragment>{names.map(name => <h2>{ name }</h2>)}</Fragment>;
}

export default ListRendering