"use client";
import React, { useState, useEffect } from 'react';


interface HomeProps {
  user: string | null | undefined;
}

//show current user login in 
function Home () {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h1 className="relative flex justify-center text-bold">Dashboard</h1>
      <h1 className="relative flex justify-center text-bold">Welcome </h1>
    </div>
  )
}

export default Home;