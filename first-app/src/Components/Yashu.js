import React from 'react'

let arr1 = ["🙂", "😊","😘","😂","😅","🥲","❤️","💕","🤣"];
let emoji = Math.floor(Math.random()*9) ;
// emoji variable as a index and emoji var m random no. aayega from 0 to 9 

let todos = ["day1","day2","day3","day4","day5"];

const Yashasvi = () => {
  return (
    <div>
      <h1>Hi, I am inside this yashu component</h1>
      <h2>{arr1[emoji]}
      {
        todos.map((item,index)=>{
          return <li key={index}> My task is {item} & position is {index}</li>
        })
      }
      </h2>

     
    </div>
  )
}

export default Yashasvi

//  jo file component hai uss pr react ka icon aayega


// fun ke andar kisi bhi cheez ko evaluate krne ke liye use curly braces m likhenge and fun ke andar js ko bhi {} m likeneg
// component ke andar means fun ke andar  vahi likenge jo hume browser pr dikhana hai show krna hai
// logic ko, loop ko , array ko fun ke andar nhi likh sakte  means component ke vahar likheneg
// har list item ke pass 1 unique key honi chahiye toh key attribute m value assign krenge(unique value) 
// array ko traverse krne ke liye map method ka use krenge and map method accepts a callback fun(callback fun m 2 parameter pass krte hai item(element) and uss item ka index)