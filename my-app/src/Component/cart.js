import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LatestProduct from "./LatestProduct";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {remove} from '../store/cartSlice';
function Cart() {
  const dispatch = useDispatch();
  const item = useSelector((state)=> state.cart)
  const [qty, setQty] = useState()

  function cqnt(event) {
    setQty(event.target.value)
  }

  function deleteItem(data) {
    dispatch(remove(data));
  }
  return (
    <>
      <div className="container cart">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {item.map((data, index)=>(
              <tr key={index}>
              <td>
                  <div className="cart-info">
                    <img src={"http://localhost:1337" + data?.attributes?.image?.data?.attributes?.url} alt="img" />
                    <div>
                      <p>{data.attributes.name}</p> 
                      <span>Price: $20</span> <br />
                      <Link to="#"onClick={() => deleteItem(data)} >remove</Link>
                    </div>
                  </div>
                </td> 

                <td>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => cqnt(e, index)}
                    min="1"
                  />
                </td>

                <td>${data.attributes.price}</td>

              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
        <table>
  <tbody> 
    <tr>
      <td>Total</td>
      <td>$30</td>
    </tr>
  </tbody>
</table>

          <Link to="/Checkout" className="checkout btn">
            Proceed To Checkout
          </Link>
        </div>
      </div>
      <LatestProduct num={4} />
    </>
  );
}

export default Cart;
