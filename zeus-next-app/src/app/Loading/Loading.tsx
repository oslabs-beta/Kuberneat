import LoadingUI from "@/components/ui/LoadingUI";
import React, { useState, useEffect } from "react";
import Home from "../Home/page";


function Loading (){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>{
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  },[]);
  if (isLoading) {
    return <LoadingUI />
  }
  return <Home />
};

export default Loading;