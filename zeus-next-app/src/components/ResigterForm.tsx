import React from 'react';
import './globals.css'
function RegisterForm(){
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm;