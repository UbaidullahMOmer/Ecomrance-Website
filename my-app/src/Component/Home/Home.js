import React from 'react'
import Navbar from "./Navbar.js"
import Footer from '../Footer.js'
import '../style.css'
function Home() {
  return (
    <>
    {/* <!-- Header --> */}
   <header className="header" id="header">
     {/* <!-- Top Nav --> */}
     <Navbar/>

     {/* Hero Section  */}
   <div className="hero">
     <div className="glide" id="glide_1">
       <div className="glide__track" data-glide-el="track">
         <ul className="glide__slides">
           <li className="glide__slide">
             <div className="center">
               <div className="left">
                 <span className="">New Inspiration 2020</span>
                 <h1 className="">NEW COLLECTION!</h1>
                 <p>Trending from men's and women's  style collection</p>
                 <a href="/" className="hero-btn">SHOP NOW</a>
               </div>
               <div className="right">
                   <img className="img1" src="./images/hero-1.jpg" alt=""/>
               </div>
             </div>
           </li>
           <li className="glide__slide">
             <div className="center">
               <div className="left">
                 <span>New Inspiration 2020</span>
                 <h1>THE PERFECT MATCH!</h1>
                 <p>Trending from men's and women's  style collection</p>
                 <a href="/" className="hero-btn">SHOP NOW</a>
               </div>
               <div className="right">
                 <img className="img2" src="./images/hero-2.png" alt=""/>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </div>
   </div>
   </header>

   {/* <!-- Categories Section --> */}
   <section className="section category">
     <div className="cat-center">
       <div className="cat">
         <img src="./images/cat3.jpg" alt="" />
         <div>
           <p>WOMEN'S WEAR</p>
         </div>
       </div>
       <div className="cat">
         <img src="./images/cat2.jpg" alt="" />
         <div>
           <p>ACCESSORIES</p>
         </div>
       </div>
       <div className="cat">
         <img src="./images/cat1.jpg" alt="" />
         <div>
           <p>MEN'S WEAR</p>
         </div>
       </div>
     </div>
   </section>

   {/* <!-- New Arrivals --> */}
   <section className="section new-arrival">
     <div className="title">
       <h1>NEW ARRIVALS</h1>
       <p>All the latest picked from designer of our store</p>
     </div>

     <div className="product-center">
       <div className="product-item">
         <div className="overlay">
           <a href="productDetails.html" className="product-thumb">
             <img src="./images/product-1.jpg" alt="" />
           </a>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="productDetails.html">Quis Nostrud Exercitation</a>
           <h4>$700</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-3.jpg" alt="" />
           </a>
           <span className="discount">50%</span>
         </div>

         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Sonata White Men’s Shirt</a>
           <h4>$800</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-2.jpg" alt="" />
           </a>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Concepts Solid Pink Men’s Polo</a>
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
           <a href="/" className="product-thumb">
             <img src="./images/product-4.jpg" alt="" />
           </a>
           <span className="discount">50%</span>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Edor do eiusmod tempor</a>
           <h4>$900</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-5.jpg" alt="" />
           </a>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Edor do eiusmod tempor</a>
           <h4>$100</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-6.jpg" alt="" />
           </a>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Edor do eiusmod tempor</a>
           <h4>$500</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-7.jpg" alt="" />
           </a>
           <span className="discount">50%</span>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Edor do eiusmod tempor</a>
           <h4>$200</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-2.jpg" alt="" />
           </a>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Edor do eiusmod tempor</a>
           <h4>$560</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
     </div>
   </section>


   {/* <!-- Promo --> */}

   <section className="section banner">
<div className="left">
 <span className="trend">Trend Design</span>
 <h1>New Collection 2021</h1>
 <p>New Arrival <span className="color">Sale 50% OFF</span> Limited Time Offer</p>
 <a href="/" className="btn btn-1">Discover Now</a>
</div>
<div className="right">
 <img src="./images/banner.png" alt=""/>
</div>
   </section>




   {/* <!-- Featured --> */}
 
   <section className="section new-arrival">
     <div className="title">
       <h1>Featured</h1>
       <p>All the latest picked from designer of our store</p>
     </div>

     <div className="product-center">
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-7.jpg" alt="" />
           </a>
           <span className="discount">50%</span>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Quis Nostrud Exercitation</a>
           <h4>$700</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-4.jpg" alt="" />
           </a>
         </div>

         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Sonata White Men’s Shirt</a>
           <h4>$800</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       <div className="product-item">
         <div className="overlay">
           <a href="/" className="product-thumb">
             <img src="./images/product-1.jpg" alt="" />
           </a>
           <span className="discount">40%</span>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Concepts Solid Pink Men’s Polo</a>
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
           <a href="/" className="product-thumb">
             <img src="./images/product-6.jpg" alt="" />
           </a>
         </div>
         <div className="product-info">
           <span>MEN'S CLOTHES</span>
           <a href="/">Edor do eiusmod tempor</a>
           <h4>$900</h4>
         </div>
         <ul className="icons">
           <li><i className="bx bx-heart"></i></li>
           <li><i className="bx bx-search"></i></li>
           <li><i className="bx bx-cart"></i></li>
         </ul>
       </div>
       </div>
   </section>

   {/* <!-- Contact --> */}
   <section className="section contact">
     <div className="row">
       <div className="col">
         <h2>EXCELLENT SUPPORT</h2>
         <p>We love our customers and they can reach us any time
         of day we will be at your service 24/7</p>
         <a href="/" className="btn btn-1">Contact</a>
       </div>
       <div className="col">
         <form action="">
           <div>
             <input type="email" placeholder="Email Address"/>
           <a href="/">Send</a>
           </div>
         </form>
       </div>
     </div>
   </section>

   {/* <!-- Footer --> */}
   
   <Footer/>

    {/* <!-- Footer --> */}


 {/* <!-- PopUp --> */}
 <div className="popup hide-popup">
   <div className="popup-content">
     <div className="popup-close">
       <i className='bx bx-x'></i>
     </div>
     <div className="popup-left">
       <div className="popup-img-container">
         <img className="popup-img" src="./images/popup.jpg" alt="popup"/>
       </div>
     </div>
     <div className="popup-right">
       <div className="right-content">
         <h1>Get Discount <span>50%</span> Off</h1>
         <p>Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!
         </p>
         <form action="#">
           <input type="email" placeholder="Enter your email..." className="popup-form"/>
           <a href="/">Subscribe</a>
         </form>
       </div>
     </div>
   </div>
 </div>

   </>
  )
}

export default Home