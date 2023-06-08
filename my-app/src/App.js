import Home from "./Component/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer";
import Login from "./Component/Login"; 
import Signup from "./Component/Signup";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import ProductDetail from "./Component/ProductDetail";
import React, { useEffect, useState } from "react";
import Aboutus from "./Component/About/Aboutus";
import Catagory from "./Component/Catagories/Catagory";
import Checkout from "./Component/Checkout/Checkout";
import {Provider} from "react-redux"
import store from "./Store/Store";
function App() { 
  // const [pData, setPData] = useState([]);
  // const getMovieList  = async () => {

  //     const url = 'http://localhost:1337/api/products?populate=*';

  //     const response = await fetch (url);
  //             try {
  //                 const responseJson = await response.json();
  //                 const data = (responseJson);
  //                 setPData(data.data);
  //                 console.log(data.data)
  //             } catch (err) {
  //                 console.error(err);
  //             }

  // };

  // useEffect (()=> {
     
  //  getMovieList();
  // }, []);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => { 
    // Retrieve cart data from localStorage
    const cartData = localStorage.getItem("product");
    if (cartData) {
      const cartItems = JSON.parse(cartData);
      setCartItemCount(cartItems.length);
    }
  }, []);

  useEffect(() => {
    // Update cart item count in localStorage
    localStorage.setItem("cartItemCount", cartItemCount.toString());
  }, []);
  return (
    <>  
    <Provider store={store}>

   
                 {/* {pData.map((data) =>{
                 return(
                    <card >
                      <h1>{data?.attributes?.UID}</h1>
                      <h1>{data?.attributes?.name}</h1>
                      <h3>{data?.attributes?.date}</h3>
                      <h3>{data?.attributes?.price}</h3> 
                      <h3>{data?.attributes?.createdAt}</h3> 
                      <img src={"http://localhost:1337" + data.attributes.image.data.attributes.url} alt="" />
               </card>
                 );
                   
            })} */}
     <BrowserRouter>

    <Navbar num={cartItemCount}/> 
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Login" Component={Login} />
      <Route path="/Signup" Component={Signup} />
      <Route path="/cart" Component={Cart} />
      <Route path="/Product" Component={Product} />
      <Route path="/ProductDetail" Component={ProductDetail} />
      <Route path="/About" Component={Aboutus} />
      <Route path="/Catagory" Component={Catagory} />
      <Route path="/Checkout" Component={Checkout} /> 
    </Routes> 
      <Footer/>
      </BrowserRouter>
      </Provider>
    </>
  );
}
  
export default App;
