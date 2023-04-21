import Home from "./Component/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
// import Login from "./Component/Login";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      {/* <Route to="/Shop" Component={Shop} /> */}
      {/* <Route to="/Term" Component={Term} /> */}
      {/* <Route to="/About" Component={About} /> */}
    </Routes>
    </BrowserRouter>
   {/* <!-- Footer --> */}
   
   <Footer/>

    {/* <!-- Footer --> */}
    </>
  );
}

export default App;
