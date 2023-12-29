import React from 'react'
import Person from './Components/Person'
import Yashu from './Components/Yashu'

// rafce and rfce

const App = () => {
  return (
    <div>
        <div>
          <Person name="yashasvi" age="20" favColor="violet"/>
          <Person name="tanya" age="21" favColor="pink"/>
          <Person name="ritika" age="22" favColor="yellow"/>
          <Person name="dimpy" age="23" favColor="green"/>
          <Yashu/>

        </div>
        {/*Person fun ko call kr rhe hai and usme(person fun m) 3 properties means3 attributes bhej rhe hai toh person fun m  parentheses m props likenge and fun ke andar props.attribute_name likhenge in{props.attribute_name} to execute that attribute and {} se pehle ya {} ke baad html tag ke anadr kuch bhi likh sakte hai*/}
        
         
    </div>
  )
}

export default App
// components ka 1st letter should be capital
// App function se 2 component return jr rhe hai
// 1 component ko kitni bhi baar use kr sakte h
// components ko reuse kr sakte h



// hum react m event listeners ka use kr sakte hai
// div pr click event lagaya hai or usme fun assign kiya hai ..jab hum uss div pr click kreneg toh handleclick fun call hoga and execute hoga
// handleclick fun ko component ke andar hi likhenge