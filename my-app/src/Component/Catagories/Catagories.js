import React from 'react'
import { Link } from 'react-router-dom'
function Catagories() {
  return (
    <section className="section category">
    <div className="cat-center">
      <div className="cat">
        <img src="./images/cat3.jpg" alt="sds" />
        <div>
          <Link to="/catagory">WOMEN'S WEAR</Link>
        </div>
      </div>
      <div className="cat">
        <img src="./images/cat2.jpg" alt="sdfsd" />
        <div>
        <Link to="/catagory">ACCESSORIES</Link>
        </div>
      </div>
      <div className="cat">
        <img src="./images/cat1.jpg" alt="Cat1 imga" />
        <div>
        <Link to="/catagory">MEN'S WEAR</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Catagories