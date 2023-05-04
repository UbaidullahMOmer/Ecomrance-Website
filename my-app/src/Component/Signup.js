import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
     <div className="container">
      <div className="login-form">
        <form action="">
          <h1>Sign Up</h1>
          <p>
            Please fill in this form to create an account. or
            <Link to="/login">Login</Link>
          </p>

          <label for="email">Email</label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-repeat">Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />
                   <label for="psw">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            name="fname"
            required
          />
          <label for="psw">Last Name</label>
          <input
            type="password"
            placeholder="Enter last name"
            name="lname"
            required
          />
          <label for="psw">Mobile Number</label>
          <input
            type="password"
            placeholder="Enter mobile number"
            name="psw"
            required
          />
          <p>
            By creating an account you agree to our
            <Link to="/Privacy">Terms & Privacy</Link>.
          </p>

          <div className="buttons">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup