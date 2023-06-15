import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function LatestProduct(props) {
  const navigate = useNavigate();
  const [pData, setPData] = useState([]);
  const getMovieList = async () => {
    const url = "http://localhost:1337/api/products?populate=*";

    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data);
      console.log(data + "latest product")
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
  return (
    <>
      <section className="section featured">
        ~
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4rem",
            fontSize: "2rem",
          }}
          className="to container"
        >
          <center></center>
          <h1>Latest Products</h1>
        </div>
        <div className="product-center container">
          {pData
            .sort((a, b) => {
              // console.log(a)
              return b?.id - a?.id;
            })
            .map((data, index) => {
              if (index < props.num) {
                return (
               
                    <div key={data.id} className="product-item">
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
                      {/* http://localhost:1337/api/products?populate=* */}
                      <div className="product-info">
                        <span>
                          {data?.attributes?.subcata?.data?.attributes?.title}
                        </span>
                        <botton onClick={() => handleClick(data?.id)}>
                          {data?.attributes?.name}
                        </botton>
                        <h4>${data?.attributes?.price}</h4>
                      </div>
                      <ul className="icons">
                        <li>
                          <i className="bx bx-heart"></i>
                        </li>
                        <li>
                          <i className="bx bx-search"></i>
                        </li>
                        <li>
                          <i className="bx bx-cart"></i>
                        </li>
                      </ul>
                    </div>
            
                );
              }
            })}
        </div>
      </section>
    </>
  );
}

export default LatestProduct;
