import React, { useState} from "react";
import { Link } from "react-router-dom";
import LatestProduct from "./LatestProduct";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

function Cart() {   
  
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart);
  const [qty, setQty] = useState({});

  function cqnt(event, itemId) {
    setQty((prevQty) => ({ ...prevQty, [itemId]: event.target.value }));
  }

  const totalPrice = item.reduce((total, data) => {
    const itemQty = qty[data?.id] ? parseInt(qty[data?.id]) : 1;
    const subtotal = itemQty * data?.attributes?.price;
    return total + subtotal;
  }, 1);

  function deleteItem(itemId) {
    dispatch(remove(itemId));
  }
console.log(item)
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
            {item.map((data) => (
              <tr key={data?.id}>
                <td>
                  <div className="cart-info">
                    <img 
                      src={
                        "http://localhost:1337" +
                        data?.attributes?.image?.data?.attributes?.url
                      }
                      alt="img"
                    />
                    <div>
                      <p>{data?.attributes?.name}</p>
                      <span>Price: ${data?.attributes?.price}</span> <br />
                      <Link to="#" onClick={() => deleteItem(data?.id)}>
                        remove
                      </Link>
                    </div>
                  </div>
                </td>

                <td>
                  <input
                    type="number"
                    value={qty[data?.id] || "1"}
                    onChange={(e) => cqnt(e, data?.id)}
                    min="1"
                  />
                </td>

                <td>${data?.attributes?.price * (qty[data?.id] || 1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Total</td>
                <td>${totalPrice}</td>
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
