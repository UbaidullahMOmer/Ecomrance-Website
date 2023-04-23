import React from 'react'
import { Link } from "react-router-dom";

function LatestProduct() {
  return (
    <>
       <section className="section featured">
      <div className="top container">
        <h1>Latest Products</h1>
        <Link to="/" className="view-more">View more</Link>
      </div>
      <div className="product-center container">
        <div className="product-item">
          <div className="overlay">
            <Link to="/" className="product-thumb">
              <img src="./images/product-6.jpg" alt="" />
            </Link>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="/">Concepts Solid Pink Men’s Polo</Link>
            <h4>$150</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <Link to="/" className="product-thumb">
              <img src="./images/product-1.jpg" alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="/">Concepts Solid Pink Men’s Polo</Link>
            <h4>$150</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <Link to="/" className="product-thumb">
              <img src="./images/product-3.jpg" alt="" />
            </Link>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="/">Concepts Solid Pink Men’s Polo</Link>
            <h4>$150</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <Link to="/" className="product-thumb">
              <img src="./images/product-2.jpg" alt="" />
            </Link>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="/">Concepts Solid Pink Men’s Polo</Link>
            <h4>$150</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
      </div>
    </section>

    </>
    )
}

export default LatestProduct