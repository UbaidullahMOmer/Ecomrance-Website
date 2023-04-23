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

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
            //   style="margin-bottom: 15px"
              style={{marginBottom: '15px'}}
            />
            Remember me
          </label>

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