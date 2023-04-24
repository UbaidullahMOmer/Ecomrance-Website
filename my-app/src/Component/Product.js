import React from 'react'
import { Link } from "react-router-dom";
import LatestProduct from './LatestProduct';
function Product() {
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
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>
      <div className="product-center container">
        <div className="product-item">
          <div className="overlay">
            <Link to="/ProductDetail" className="product-thumb">
              <img src="./images/product-7.jpg" alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="/ProductDetail">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="" className="product-thumb">
              <img src="./images/product-2.jpg" alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="/ProductDetail">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="/ProductDetail" className="product-thumb">
              <img src="./images/product-3.jpg" alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="" className="product-thumb">
              <img src="./images/product-4.jpg" alt="" />
            </Link>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="" className="product-thumb">
              <img src="./images/product-5.jpg" alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="" className="product-thumb">
              <img src="./images/product-6.jpg" alt="" />
            </Link>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="" className="product-thumb">
              <img src="./images/product-7.jpg" alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
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
            <Link to="" className="product-thumb">
              <img src="./images/product-4.jpg" alt="" />
            </Link>
          </div>
          <div className="product-info">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
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
    <section className="pagination">
      <div className="container">
        <span>1</span> <span>2</span> <span>3</span> <span>4</span>
        <span><i className="bx bx-right-arrow-alt"></i></span>
      </div>
    </section>

    {/* LatestProduct */}

    <LatestProduct/>

    {/* LatestProduct */}
    </>
  )
}

export default Product