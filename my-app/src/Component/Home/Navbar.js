import React from "react";
import "../style.css"

function Navbar() {
  return (
    <>
      <div className="top-nav">
        <div className="container d-flex">
          <p>Order Online Or Call Us: (001) 2222-55555</p>
          <ul className="d-flex">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation">
        <div className="nav-center container d-flex">
          <a href="index.html" className="logo">
            <h1>Ecomrance</h1>
          </a>

          <ul className="nav-list d-flex">
            <li className="nav-item">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="product.html" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="#terms" className="nav-link">
                Terms
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="icons d-flex">
              <a href="login.html" className="icon">
                <i className="bx bx-user"></i>
              </a>
              <div className="icon">
                <i className="bx bx-search"></i>
              </div>
              <div className="icon">
                <i className="bx bx-heart"></i>
                <span className="d-flex">0</span>
              </div>
              <a href="cart.html" className="icon">
                <i className="bx bx-cart"></i>
                <span className="d-flex">0</span>
              </a>
            </li>
          </ul>

          <div className="icons d-flex">
            <a href="login.html" className="icon">
              <i className="bx bx-user"></i>
            </a>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <a href="cart.html" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </a>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
