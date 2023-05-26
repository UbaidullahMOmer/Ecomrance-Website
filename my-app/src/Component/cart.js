import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LatestProduct from "./LatestProduct";
function Cart() {
  const [id, setId] = useState();
  const [qnt, setQnt] = useState();

  const [pData, setPData] = useState();
  const sprodata = localStorage.getItem("product");
  // console.log(sprodata)
  let data = JSON.parse(sprodata);
  // data.map(
  // console.log(data)
  //   )
  const getMovieList = async () => {
    const url = "http://localhost:1337/api/products?populate=*";

    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data);
      // console.log(pData)
    } catch (err) {
      console.error(err);
    }
  };
   
  // //   const [prodata, setProdata] = useState(
  // //     [
  // //       rname = "T-shirt",
  // //       price = "500$",
  // //       qnt = "4"
  // //     ])
  // //   const prodata = [
  // //     rname : "T-shirt",
  // //   ]
  // //   const [prodata, setProdata] = useState({
  // //     id: 3,
  // //     name: 'T-shirt',
  // //     price: '250',
  // //     qnt: 3,
  // //     catagory: 'clothes'
  // });
  // // function cqnt(event){
  // // setProdata.qnt(event)
  // // setProdata(prevState => ({
  // //   ...prevState,
  // //   qnt: event.target.value
  // // }));
  // // }
  useEffect(() => {
    getMovieList();
  }, []);
  data?.map((data) => {
    console.log(data.product_id);
    id = data.product_id;
    qnt = data.qnt;
  });
  return (
    <>
      <div className="container cart">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {/* Add Cart Item */}

          {pData?.map((data, index) => {
            data?.map((data) => {
              console.log(data.product_id);
              id = data.product_id;
              qnt = data.qnt;
            });
              return (
                <tr>
                  <td>
                    <div className="cart-info">
                      <img src="./images/product-6.jpg" alt="" />
                      <div>
                        <p>{}</p>
                        <span>Price: ${}</span> <br />
                        <Link to="">remove</Link>
                      </div>
                    </div>
                  </td>
                  {/* <td><input type="number" value={} onChange={(e)=>cqnt(e)} min="1" /></td> */}
                  <td>${}</td>
                </tr>
              );
         
          })}
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$250</td>
            </tr>
          </table>
          <Link to="/" className="checkout btn">
            Proceed To Checkout
          </Link>
        </div>
      </div>

      {/* LatestProduct */}

      <LatestProduct num={4} />

      {/* LatestProduct */}
    </>
  );
}

export default Cart;
