import React from 'react'
import'./App.css'
// import News  from './components/News'
import Hoome from './moviecom/Hoome'
import Movies from './moviecom/Movies'
import {BrowserRouter,Routes,Route, Router} from "react-router-dom";
import Singlemovie from './moviecom/Singlemovie'
// import Indexx from './Counter/Indexx';



function App() {
  return (
    <div>
    
      {/* <Search/>  */}
      
       <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Movies/>}></Route>
          <Route path="/movie/:id" element={<Singlemovie/>}></Route>
        </Routes>
       </BrowserRouter>
       
      
       {/* <Indexx/> */}



    </div>
  )
}







// function App() {
//   return (
//     <div>
//      {/* *** **** ****** ** ******* thi si sfor api basic */}
//      <News/>
//     {/* *** **** ****** ** ******* thi si sfor api basic */}

//       {/* // <Hoome/> */}
//     </div>
//   )
// }































export default App
