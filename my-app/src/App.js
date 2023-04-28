//  import Home from "./Component/Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import React, { useEffect, useState } from "react";
// import Navbar from "./Component/Navbar";
// import Footer from "./Component/Footer";
// import Login from "./Component/Login";
// import Signup from "./Component/Signup";
// import cart from "./Component/cart";
// import Product from "./Component/Product";
// import ProductDetail from "./Component/ProductDetail";
import { Auth } from "./Fcomonent/auth";
import { db } from "./Config/firebase";
import { getDocs, collection } from "firebase/firestore";
function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "products");
  useEffect(() => {
    const getMovieList = async () => {
      //Read The Data
      //SET THE MOVIES LIST
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
        // console.log(filteredData);
      } catch (err) { 
        console.log(err);
      }
    };

    getMovieList();
  }, []);
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
      <Auth />
      <div>
        {movieList.map((products)=> (
          <div>
            <h1>{products.ProductName}</h1>
            <p>Release Date: {products.date} </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
