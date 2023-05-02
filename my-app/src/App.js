//  import Home from "./Component/Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Navbar from "./Component/Navbar";
// import Footer from "./Component/Footer";
// import Login from "./Component/Login";
// import Signup from "./Component/Signup";
// import cart from "./Component/cart";
// import Product from "./Component/Product";
// import ProductDetail from "./Component/ProductDetail";
import React, { useEffect, useState } from "react";
import { Auth } from "./Fcomonent/auth";
import { db ,auth } from "./Config/firebase";
import { getDocs, collection, addDoc, deleteDoc,updateDoc, doc} from "firebase/firestore";
function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "products");
  const [newProductName, setNewProductName] = useState("");
  const [newProductDate, setNewProductDate] = useState(0);
  const [newProductPrice, setNewProductPrice] = useState("");
  // Update States 
  const [updateProductName, setUpdateProductName] = useState("");
  
  const getMovieList = async () => {
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

  const onSubmitProduct = async () => {
    try{
      await addDoc(moviesCollectionRef, {
        ProductName: newProductName,
        Date: newProductDate,
        ProductPrice: newProductPrice, 
        userId: auth?.currentUser?.uid,
       });
       getMovieList();
    }catch(err){
      console.error(err)
    }
  };
  const deleteProducts = async (id) => {
    const ProductsDoc = doc(db, "products", id);
    console.log(ProductsDoc);
    await deleteDoc(ProductsDoc);
  };
  const UpdateProductTitle = async (id) => {
    const ProductsDoc = doc(db, "products", id);
    console.log(ProductsDoc);
    await updateDoc(ProductsDoc,{ ProductName: updateProductName });
  };

  useEffect(() => { 
    deleteProducts();
    getMovieList();
  },[deleteProducts]);
  return (
    <>
    <center>
      <Auth />
      <div>
        <input
          onChange={(e) => setNewProductName(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="ProductName"
        />

        <input
          onChange={(e) => setNewProductDate(Number(e.target.value))}
          type="Number"
          id=""
          placeholder="Date"
        />

        <input
          onChange={(e) => setNewProductPrice(Number(e.target.value))}
          type="Number"
          name=""
          id=""
          placeholder="ProductPrice"
        />

        <button onClick={onSubmitProduct}>Add Product</button>
      </div>
      <div>
        {movieList.map((products) => (
          <div>
            <h1 style={{color:"red"}}>{products.ProductName}</h1>
            <p>Release Date: {products.Date} </p>
            <p>Product Price: {products.ProductPrice}</p>
            <button onClick={() => deleteProducts(products.id)}>Delete</button>
            <input type="text" placeholder="Change product Name" 
            onChange={(e) => setUpdateProductName(e.target.value)} 
            />
            <button 
            onClick={() => UpdateProductTitle(products.id)}
            >
              Update Product Name
            </button>
          </div>
        ))}
      </div>


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
      </center>
    </>
  );
}

export default App;
