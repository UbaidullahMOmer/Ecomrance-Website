import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import LatestProduct from "./LatestProduct";

function ProductDetail() {
  const [rid, setRid] = useState();

  const [pData, setPData] = useState([]);
  const getMovieList = async () => {
    const url = "http://localhost:1337/api/products?populate=*";
    setRid(2)
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data);
      console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <section className="section product-detail">
        {pData
          .filter((p) => p.id === rid (<div className="details container">
          <div className="left image-container">
            <div className="main">
              <img
                // src={"http://localhost:1337" + pData?.data?.attributes?.image?.data?.attributes?.url}
                id="zoom"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <span>Home/T-shirt</span>
            <h1>Boy’s T-Shirt By Handsome</h1>
            <div className="price">$50</div>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </div>
            </form>
            <form className="form">
              <input type="text" placeholder="1" />
              <Link href="cart.html" className="addCart">
                Add To Cart
              </Link>
            </form>
            <h3>Product Detail</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              minima delectus nulla voluptates nesciunt quidem laudantium,
              quisquam voluptas facilis dicta in explicabo, laboriosam ipsam
              suscipit!
            </p>
          </div>
        </div>)) 
            
        }
      </section>

      <LatestProduct num={4} />
    </>
  );
}

export default ProductDetail;
