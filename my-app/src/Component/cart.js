import React, { useState } from 'react'
import { Link } from "react-router-dom";
import LatestProduct from './LatestProduct';
function Cart() {
  // const [prodata, setProdata] = useState(
  //   [
  //     rname = "T-shirt",
  //     price = "500$",
  //     qnt = "4"
  //   ])
  // const prodata = [
  //   rname : "T-shirt",
    
  // ]
  const [prodata, setProdata] = useState({
    id: 3,
    name: 'T-shirt',
    price: '250',
    qnt: 3,
    catagory: 'clothes'
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
          <tr>
            <td>
              <div className="cart-info">
                <img src="./images/product-6.jpg" alt="" />
                <div>
                  <p>{prodata.name}</p>
                  <span>Price: ${prodata.price}</span> <br />
                  <Link to="">remove</Link>
                </div>
              </div>
            </td>
            <td><input type="number" value={prodata.qnt} min="1" /></td>
            <td>${prodata.price * prodata.qnt}</td>
          </tr>
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
          <Link to="/" className="checkout btn">Proceed To Checkout</Link>
        </div>
      </div>

      {/* LatestProduct */}

      <LatestProduct num={4} />

      {/* LatestProduct */}
    </>
  )
}

export default Cart