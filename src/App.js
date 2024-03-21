import React from 'react'
import'./App.css'
// import News  from './components/News'
// import Hoome from './moviecom/Hoome'
import { AppProvider } from './moviecom/Context'
import Movies from './moviecom/Movies'
// import Search from './moviecom/Search'
// import Search from './moviecom/Search'
// import {BrowserRouter,Routes,Route} from "react-router-dom";
import Indexx from './Counter/Indexx';



function App() {
  return (
    <div>
      {/* <AppProvider>
     
      <Search/> 
       <Movies/>
       </AppProvider> */}
       <Indexx/>



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
