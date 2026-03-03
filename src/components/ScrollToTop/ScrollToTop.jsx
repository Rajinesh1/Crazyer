import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const{about} = useLocation

    useEffect(() =>{
        window.scroll(0,0);
    },[about])
  return null;
}

export default ScrollToTop