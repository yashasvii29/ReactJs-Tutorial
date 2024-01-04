import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';


const Form = (props) => {
    
  let [input , setInput] =useState('');
  let [isValid , setIsvalid] =useState(true);
   function inputChangeHandler(e){ // jab hum input ko change krenge toh onChange event chalega and y fun call hoga toh fun ke andar event ko catch krenge means event ko pass krenge as a argument in (e) iss fun m e(means event object) ko pass krenge as a argument...means event ko catch krenge
    // console.log(e.target.value);
    setInput(e.target.value);
    // event ke andar jo target hai uski value assign ho jayegi in input variable
    if(input.trim().length>0){
      // trim() white spaces ko remove kr deta hai...toh white spcaes ko remove krne baad if input ki length>0 hai toh isValid var m true assign kr denge
      setIsvalid(true);
    }
   }

   function formSubmitHandler(e){
    // function ke nadra event ko catch krenge means e ko pass krenge as a argument in (e) 
    e.preventDefault(); //isse form submit krne ke baad page refresh nhi hoga(means form bydefault submit hoga) ... preventing from getting submitted
    if(input.trim().length===0){
      setIsvalid(false);
      return ;
    }
    
    const newTodo = { //form submit hote hi ek newTodo create hoga and new todo ko todos array m add kr denge addTodo fun ki help se
      id:uuid(),
      todo: input ,
      checked:false
    }
    // newTodo ko todos array m add krna hai means todos array m push krna hai toh uske liye  useState hook ka use krenge todos array m newtodo ko add krne ke liye means array m change krne ke liye....
    // 
    props.addTodo(newTodo);  // props.addTodo se addTodo fun aa jayega and uss fun m newTodo object ko bhej rhe hai as a argument  addTodo fun call hoga and usme newTodo ko bheja rhe hai in Todoapp component
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