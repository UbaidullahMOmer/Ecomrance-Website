import React from 'react'
import { Link } from "react-router-dom";
import LatestProduct from './LatestProduct';
function cart() {
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
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $60.00</span> <br />
                  <Link to="/">remove</Link>
                </div>
              </div>
            </td>
            <td><input type="number" value="1" min="1" /></td>
            <td>$60.00</td>
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

export default cart