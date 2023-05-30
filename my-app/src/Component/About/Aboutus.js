import React from 'react'
import './Aboutus.css';
// import img from '.banner.png'
function Aboutus() {
  return (
    <section id="about-section">
    {/* <!-- about left  --> */}
    <div className="about-left">
        <img src="./image/banner.png" alt="About Imge"/>
    </div> 

    {/* <!-- about right  --> */}
    <div className="about-right">
        <h4>My Story</h4>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis fugiat a dolorem at similique maxime dolorum dolore
            enim dicta voluptatibus, illum recusandae, vel optio tempore
            ipsum incidunt eum. Aspernatur, repellendus.
        </p>
        <div className="address">
            <ul>
                <li>
                    <span className="address-logo">
                        <i className="fas fa-paper-plane"></i>
                    </span>
                    <p>Address</p>
                    <span className="saprater">:</span>
                    <p>Rahim Yar Khan, Punjab, Pakistan</p>
                </li>
                <li>
                    <span className="address-logo">
                        <i className="fas fa-phone-alt"></i>
                    </span>
                    <p>Phone No</p>
                    <span className="saprater">:</span>
                    <p>+91 987-654-4321</p>
                </li>
                <li>
                    <span className="address-logo">
                        <i className="far fa-envelope"></i>
                    </span>
                    <p>Email ID</p>
                    <span className="saprater">:</span>
                    <p>Ubaidullahu449@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>
</section>

  )
}

export default Aboutus