import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LatestProduct from "./LatestProduct";

function Cart() {
  const [pData, setPData] = useState([]);
  const sprodata = localStorage.getItem("product");
  const dat = JSON.parse(sprodata);
  const [data, setData] = useState(dat);
  const [prodata, setProdata] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const tax = 50;
  const [total, setTotal] = useState(0);
  
  const getMovieList = async () => {
    const url = "http://localhost:1337/api/products?populate=*"; 
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const data = responseJson.data;
      setPData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  useEffect(() => {
    if (data && pData.length > 0) {
      const updatedProdata = data.map((item) => {
        const product = pData.find((p) => p.id === item.product_id);
        return {
          ...item,
          prodata: {
            category: product.attributes.catagory?.data?.attributes?.title,
            price: product.attributes.price,
            name: product.attributes.name,
            img: "http://localhost:1337" + product.attributes.image?.data?.attributes?.url
          }
        };
      });
      setProdata(updatedProdata);
    }
  }, [data, pData]);

  function cqnt(event, index) {
    const updatedProdata = [...prodata];
    updatedProdata[index].product_qty = event.target.value;
    setProdata(updatedProdata);
  }

  function deleteItem(index) {
    const updatedProdata = [...prodata];
    const deletedItem = updatedProdata.splice(index, 1)[0];
    setProdata(updatedProdata);
    
    // Remove item from localStorage
    const localStorageData = JSON.parse(localStorage.getItem("product"));
    const updatedLocalStorageData = localStorageData.filter(
      (item) => item.product_id !== deletedItem.product_id
    );
    localStorage.setItem("product", JSON.stringify(updatedLocalStorageData));
  }
  useEffect(() => {
    if (prodata.length > 0) {
      const sub = prodata.reduce((acc, item) => {
        return acc + item.prodata.price * item.product_qty;
      }, 0);
      setSubtotal(sub);
  
      const t = sub + tax;
      setTotal(t);
    }
  }, [prodata]);
  
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
            {prodata.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="cart-info">
                    <img src={item.prodata.img} alt="" />
                    <div>
                      <p>{item.prodata.name}</p>
                      <span>Price: ${item.prodata.price}</span> <br />
                      <Link to="#" onClick={() => deleteItem(index)}>remove</Link>
                    </div>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.product_qty}
                    onChange={(e) => cqnt(e, index)}
                    min="1"
                  />
                </td>
                <td>${item.prodata.price * item.product_qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
        <table>
  <tbody>
    <tr>
      <td>Subtotal</td>
      <td>${subtotal}</td>
    </tr>
    <tr>
      <td>Tax</td>
      <td>${tax}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${total}</td>
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
