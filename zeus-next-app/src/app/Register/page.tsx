"use client";
/**
 * Presenational component of register page 
 * @param{Register} input - The user object containing email and password.
 * @return {Promise<void>} - A promise that resolves to void.
 */

import React, { lazy } from 'react';
// lazy load to only render this component when needed
const Register = lazy(() => import('@/components/RegisterForm'));

export default Register;