import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const navigate = useNavigate();
  const [pData, setPData] = useState([]);

  const getMovieList = async () => {
    const url = "http://localhost:1337/api/catagories?populate=*";

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  function handleClick(cata) {
    navigate("/catagory", { state: { id: cata } });
    console.log(cata);
  }

  const item = useSelector((state) => state.cart);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="top-nav">
        <div className="container d-flex">
          <p>Order Online Or Call Us: (001) 2222-55555</p>
          <ul className="d-flex">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation">
        <div className="nav-center container d-flex">
          <Link to="/" className="logo">
            <h1>Ecomrance</h1>
          </Link>

          <ul className="nav-list d-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <li className="shop">
                <Link to="/product" className="nav-link">
                  Shop
                </Link>
              </li>
              {isDropdownOpen && (
                
                <div className="dropdown-content">
                  {pData?.map((data)=>(
                    <button key={data.id} onClick={() => handleClick(data.attributes.title)}>
                    {data.attributes.title}
                  </button>
                  ))}
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="#terms" className="nav-link">
                Terms
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="icons d-flex">
            <Link to="/login" className="icon">
              <i className="bx bx-user"></i>
            </Link>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <Link to="/cart" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">{item.length}</span>
            </Link>
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
