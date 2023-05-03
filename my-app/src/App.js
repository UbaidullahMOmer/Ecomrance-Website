// import Home from "./Component/Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Navbar from "./Component/Navbar";
// import Footer from "./Component/Footer";
// import Login from "./Component/Login";
// import Signup from "./Component/Signup";
// import cart from "./Component/cart";
// import Product from "./Component/Product";
// import ProductDetail from "./Component/ProductDetail";
import React, { useEffect, useState } from "react";

function App() {
  const [pData, setPData] = useState([]);
  const getMovieList  = async () => {

      const url = 'http://localhost:1337/api/products';

      const response = await fetch (url);
              try {
                  const responseJson = await response.json();
                  const data = (responseJson);
                  setPData(data.data);
                  console.log(data.data)
              } catch (err) {
                  console.error(err);
              }

  };

  useEffect (()=> {
     
   getMovieList();
  }, []);
  return (
    <> 
                 {pData.map((data) =>{
                 return(
                    <card >
                      <h1>{data?.attributes?.UID}</h1>
                      <h1>{data?.attributes?.name}</h1>
                      <h3>{data?.attributes?.date}</h3>
                      <h3>{data?.attributes?.price}</h3> 
                      <h3>{data?.attributes?.createdAt}</h3> 
               </card>
                 );
                   
            })}
     {/* <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Login" Component={Login} />
      <Route path="/Signup" Component={Signup} />
      <Route path="/cart" Component={cart} />
      <Route path="/Product" Component={Product} />
      <Route path="/ProductDetail" Component={ProductDetail} />
    </Routes> 
      <Footer/>
      </BrowserRouter> */}
      
    </>
  );
}
  
export default App;
