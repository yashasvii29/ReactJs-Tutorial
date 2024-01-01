import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';


const Form = (props) => {
    
  let [input , setInput] =useState('');
   function inputChangeHandler(e){
    // console.log(e.target.value);
    setInput(e.target.value);
   }

   function formSubmitHandler(e){
    e.preventDefault(); // preventing from getting submitted
    const newTodo = {
      id:uuid(),
      todo: input ,
      checked:false
    }
    props.addTodo(newTodo);
    console.log(input);
    setInput('');
   }
  return (
    <div>
    {/* form ko submit krne ke liye form pr onSubmit event lagayenge and usme ek fun assign kr denge toh jab hum form ko submit krenge toh y fun call hoga jo event pr lagaya hai*/}
        <form onSubmit={formSubmitHandler} action="">
            <input onChange={inputChangeHandler} type="text" placeholder='Enter your task' value={input} />
            {/* input ko change krne ke liye we will use onChange event...so input pr  onChange event lagayenge and usme ek fun assign krenge toh jab hum input ko change krenge to y fun call hoga */}
        </form>
    </div>
  )
}

export default Form
// todoapp jiske andar sari todolist hai usme form component ko bhejenge

// react is a single page application tog react m page refresh nhi hona chahiye