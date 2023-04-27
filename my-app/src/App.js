//  import Home from "./Component/Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
// import Navbar from "./Component/Navbar";
// import Footer from "./Component/Footer";
// import Login from "./Component/Login";
// import Signup from "./Component/Signup";
// import cart from "./Component/cart";
// import Product from "./Component/Product";
// import ProductDetail from "./Component/ProductDetail";
import { Auth } from "./Fcomonent/auth";
function App() {
  return (
    <>
    {/* <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Login" Component={Login} />
      <Route path="/Signup" Component={Signup} />
      <Route path="/cart" Component={cart} />
      <Route path="/Product" Component={Product} />
      <Route path="/ProductDetail" Component={ProductDetail} />
    </Routes> */}
   {/* <!-- Footer --> */}
   
   {/* <Footer/> */}

    {/* <!-- Footer --> */}

    {/* </BrowserRouter> */}
    <Auth/>
    </>
  );
}

export default App;
