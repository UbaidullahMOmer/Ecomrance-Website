import React from 'react'

import { Link } from "react-router-dom";

function Login() {
  return (
    <>
     <div className="container">
      <div className="login-form">
        <form action="">
          <h1>Login</h1>
          <p>
            Already have an account? Login in or
            <Link to="/signup">Sign Up</Link>
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
          <p>
            By creating an account you agree to our
            <Link to="/">Terms & Privacy</Link>.
          </p>

          <div className="buttons">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Login</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
