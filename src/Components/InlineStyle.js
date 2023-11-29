import React from 'react'

function InlineStyle() {
  const style = {
    display: 'grid',
    placeContent: 'center',
    width: "400px",
    height: "200px",
    color: "white",
    margin: '20px auto',
    backgroundColor: "blueviolet",
    borderRadius: '16px',
    fontSize: '50px',
    fontWeight: '900',
  };
  return (
    <div style={style}>InlineStyle</div>
  )
}

export default InlineStyle