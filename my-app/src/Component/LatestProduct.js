import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LatestProduct() {

  const [pData, setPData] = useState([]);
  const getMovieList  = async () => {

      const url = 'http://localhost:1337/api/products?populate=*';

      const response = await fetch (url);
              try {
                  const responseJson = await response.json();
                  const data = (responseJson);
                  setPData(data.data);
                  console.log(data.data)
              } catch (err) { 
                  console.error(err);
              }

  };
  useEffect (()=> {
     
    getMovieList();
   }, []);
 
  return (
    <>
       <section className="section featured">
      <div className="top container">
        <h1>Latest Products</h1>
        <Link to="/" className="view-more">View more</Link>
      </div>
      <div className="product-center container">
      {pData.map((data, index) =>{
                 if(index < 4){
                  return(
                    <>
                 <div className="product-item">
                 <div className="overlay">
                   <Link to="/ProductDetail" className="product-thumb">
                     <img src={"http://localhost:1337" + data?.attributes?.image?.data?.attributes?.url} alt="" />
                   </Link>
                   <span className="discount">{data?.attributes?.discount?.data?.attributes?.title}</span>
                 </div>
                 {/* http://localhost:1337/api/products?populate=* */}
                 <div className="product-info">
                   <span>{data?.attributes?.subcata?.data?.attributes?.title}</span>
                   <Link to="/ProductDetail">{data?.attributes?.name}</Link>
                   <h4>${data?.attributes?.price}</h4>
                 </div>
                 <ul className="icons">
                   <li><i className="bx bx-heart"></i></li>
                   <li><i className="bx bx-search"></i></li>
                   <li><i className="bx bx-cart"></i></li>
                 </ul>
               </div>
                   </>
                   );
                 }
            })}
      </div>
    </section>

    </>
    )
}

export default LatestProduct