import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h1>Name is {props.name}</h1>
        <h3>Age is {props.age}</h3>
        <p>Favcolor is {props.favColor}</p>
    </div>
  )
}

export default Person




