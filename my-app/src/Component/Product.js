import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {add} from '../store/cartSlice';
import LatestProduct from "./LatestProduct";
import { useDispatch } from "react-redux";
function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pData, setPData] = useState([]);
  const getMovieList = async () => {
    const url = "http://localhost:1337/api/products?populate=*";

    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data);
      // console.log(data.data)
      // setNid(pData.data.id)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);

  function handleClick(pid) {
    navigate("/ProductDetail", { state: { id: pid } });
  
  }
  function Addcart(data){
     dispatch(add(data));
  }

  return ( 
    <>
      <section className="section all-products" id="products">
        <div className="top container">
          <h1>All Products</h1>
          <form>
            <select>
              <option value="1">Defualt Sorting</option>
              <option value="2">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </select>
            <span> 
              <i className="bx bx-chevron-down"></i>
            </span>
          </form>
        </div>
        <div className="product-center container">
          {pData.map((data) => {
            return (
              
                <div key={data?.id} className="product-item">
                  <div className="overlay">
                    <Link to="/ProductDetail" className="product-thumb">
                      <img
                        src={
                          "http://localhost:1337" +
                          data?.attributes?.image?.data?.attributes?.url
                        }
                        alt=""
                      />
                    </Link>
                    <span className="discount">
                      {data?.attributes?.discount?.data?.attributes?.title}
                    </span>
                  </div>
                  <div className="product-info">
                    <span>
                      {data?.attributes?.subcata?.data?.attributes?.title}
                    </span>
                    <botton onClick={() => handleClick(data?.id)}>
                      {data?.attributes?.name}
                    </botton>
                    <button  
                    style={{  background: "var(--green)",  padding: "0.8rem 2rem",  color: "#fff",  marginRight: "2rem",  borderRadius: "0.5rem"}} type="button" 
                    onClick={() => Addcart(data)} 
                    className="addCart more">
                        Add To Cart
                      </button>
                    <h4>${data?.attributes?.price}</h4>
                  </div>
                  <ul className="icons">
                    <li>
                      <i className="bx bx-heart"></i>
                    </li>
                    <li>
                      <i className="bx bx-cart"></i>
                    </li>
                  </ul>
                </div>
                  );
          })}
        </div>
      </section>
      <section className="pagination">
        <div className="container">
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span>
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </div>
      </section>

      {/* LatestProduct */}
      <LatestProduct num={4} />
      {/* LatestProduct */}
    </>
  );
}

export default Product;
