import React from 'react'

function ProductDetail() {
  return (
    <>
      <section class="section product-detail">
      <div class="details container">
        <div class="left image-container">
          <div class="main">
            <img src="./images/product-8.jpg" id="zoom" alt="" />
          </div>
        </div>
        <div class="right">
          <span>Home/T-shirt</span>
          <h1>Boy’s T-Shirt By Handsome</h1>
          <div class="price">$50</div>
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
              <span><i class="bx bx-chevron-down"></i></span>
            </div>
          </form>
          <form class="form">
            <input type="text" placeholder="1" />
            <a href="cart.html" class="addCart">Add To Cart</a>
          </form>
          <h3>Product Detail</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
            delectus nulla voluptates nesciunt quidem laudantium, quisquam
            voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Related --> */}
    <section class="section featured">
      <div class="top container">
        <h1>Related Products</h1>
        <a href="#" class="view-more">View more</a>
      </div>
      <div class="product-center container">
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-5.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-2.jpg" alt="" />
            </a>
            <span class="discount">40%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-7.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-4.jpg" alt="" />
            </a>
            <span class="discount">40%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProductDetail