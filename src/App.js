import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Crawl from "./Components/Crawl";
import Bars from "./Components/Bars";
import Treats from "./Components/Treats";
import StaticMap from "./Components/StaticMap";
import Prizes from "./Components/Prizes"
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import NNA from './Components/NNA';
// import Age from './Components/Age';

class App extends Component {
  render() {
    return (
      <div className="App">        
        {/* <Age /> */}
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/crawl" element={ <Crawl /> } />
          <Route exact path="/bars" element={ <Bars /> } />
          <Route exact path="/treats" element={ <Treats />} />
          <Route exact path="/map" element={ <StaticMap /> } />
          <Route exact path="/prizes" element={ <Prizes /> } />
          <Route exact path="/nna" element={ <NNA /> } />
        </Routes>
  
        <div className="nav-wrapper">
          <NavBar />
        </div>
      </div>
    );
  }
}



// function App() {
//   let callBackendAPI = async() => {
//     const response = await fetch('/maps');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message)
//     }

//     return body;
//   }
  
//   return (
//     <div className="App">
//       {/* <NavBar /> */}
//       <Routes>
//         <Route exact path="/" element={ <Home /> } />
//         <Route exact path="/about" element={ <About /> } />
//         <Route exact path="/bars" element={ <Bars /> } />
//         <Route exact path="/map" element={ <Map /> } />
//         <Route exact path="/prizes" element={ <Prizes /> } />
//       </Routes>

//       <div class="nav-wrapper">
//         <NavBar />
//       </div>
//     </div>
//   );
// }

export default App;
