import React,{useState} from 'react'

const Person = (props) => {

  let [namee, setNamee] = useState(props.name);

  function handleClick(){
    // console.log("clicked");
    setNamee("anonymous");
  }
  return (
    <div>
    <div onClick={handleClick}>I am a div click on me</div>
        <h1>Name is {namee}</h1>
        <h3>Age is {props.age}</h3>
        <p>Favcolor is {props.favColor}</p>
    </div>
  )
}

export default Person


//  jab browser pr page show hota hai toh component pehli baar rebder hota hai but component ko rerender krne ke liye we will use useState hook
// hooks are built in function , y already predefined hai to hooks ko use krne ke liye pehle import krnege
// useState hook rerenders the component
