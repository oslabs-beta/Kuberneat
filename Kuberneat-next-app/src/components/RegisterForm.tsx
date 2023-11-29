"use client"
/**
 * For users to register
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @param {string} confirmPassword - The user's password confirmation.
 * @return {Promise<void>} - A promise that resolves to void.
 */
import React from 'react';

function RegisterForm(){
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
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