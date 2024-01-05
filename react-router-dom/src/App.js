import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Main from './Components/pages/Main'
import Cat from './Components/pages/Cat'
import Dog from './Components/pages/Dog'


const App = () => {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/cat">Cat</Link></li>
            <li><Link to="/dog">Dog</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cat" element={<Cat/>} />
          <Route path="/dog" element={<Dog />} />
        </Routes>




       
    </div>
  )
}
// routing ke liye means routes ke liye we will use react-router-dom
// link , Route and Routes y teeno hi react-router-dom ka part hai toh inhe use krne ke liye we will import them from react-router-dom
// routes banane ke liye Routes tag ka use krenge ...Routes tag ke andar  Route tag ko likhenge and route tag m 2 attributes likhte hai path and element
// link refresh nhi krta
// route ko Route tag ke andar likhenge and Route tag ko Routes tag ke andar likenge and element m uss component ka name likhte hai jise show krna hai page pr inside {}...means to attribute m jo path diya hai jab req send krenge toh wo component show hoga
// react m anchor tag ke place pr link ka use krenge and href ke place pr to ka use krenge because anchor tag se page refresh hota hai because a tag href pr req send krta hai and react is a single page application isme page refresh ya reload nhi hota
export default App
