import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import LatestProduct from "./LatestProduct";

function ProductDetail() {
  const [rid, setRid] = useState();
  const location = useLocation();
  
  const [pData, setPData] = useState([]);

// console.log(location)
  
  const getMovieList = async () => {
    const url = "http://localhost:1337/api/products?populate=*";
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data); 
      // console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(location)
  useEffect(() => {
    getMovieList();
    setRid(location.state.id);
  }, []);
  // console.log(rid +"a")
  // console.log(pData[0].attributes.catagory.data.attributes.title);
  return (
    <>
      <section className="section product-detail">
        {pData?.map((p) => {
          if (p.id === rid) { 
            return (
              <>
                <section className="section product-detail">
                  <div className="details container">
                    <div className="left image-container">
                      <div className="main">
                        <img src={"http://localhost:1337" + p?.attributes?.image?.data?.attributes?.url} id="zoom" alt="" />
                      </div>
                    </div>
                    <div className="right">
                      <span>{p?.attributes?.catagory?.data?.attributes?.title}/{p?.attributes?.subcatas?.data[0]?.attributes?.title}</span>
                      <h1>{p?.attributes?.name}</h1>
                      <div className="price">${p?.attributes?.price}</div>
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
                        <input type="text" placeholder={p?.attributes?.quantity} />
                        <Link to="cart.html" className="addCart">
                          Add To Cart
                        </Link>
                      </form>
                      <h3>Product Detail</h3>
                      <p>
                        {
                          p?.attributes?.pdetail
                        }
                      </p>
                    </div>
                  </div>
                </section>
              </>
            );
          }
        })}
      </section>

      <LatestProduct num={4} />
    </>
  );
}

export default ProductDetail;
