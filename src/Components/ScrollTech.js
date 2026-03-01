import React from "react";
import "./scroll.css";

function ScrollTech() {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {/* First set */}
       <div className="logo"><img src="/assets/html.png" height={80} alt="HTML" /></div>
        <div className="logo"><img src="/assets/css.png" height={80} alt="CSS" /></div>
        <div className="logo"><img src="/assets/phplogo.png" height={80} alt="PHP" /></div>
        <div className="logo"><img src="/assets/jsLogo.png" height={80} alt="JavaScript" /></div>
        <div className="logo"><img src="/assets/Laravel.png" height={80} width={200} alt="laravel" /></div>
        <div className="logo"><img src="/assets/reactLogo.png" height={80} alt="React Js" /></div>
        <div className="logo"><img src="/assets/nextLogo.png" height={80} alt="Next Js" /></div>
        <div className="logo"><img src="/assets/reactNative.svg" height={80} alt="React Native" /></div>
        <div className="logo"><img src="/assets/mysqlLogo.png" height={80} alt="SQL" /></div>

      </div>
    </div>
  );
}

export default ScrollTech;