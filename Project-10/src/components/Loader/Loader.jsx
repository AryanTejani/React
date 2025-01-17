import React, { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import "./style.css";

const Loader = () => {
  useEffect(() => {
    // Scramble text effect using jQuery
    $(".scramble").text("UCHIHA").fadeIn(1000);

    // GSAP Timeline for loader animation
    const tl = gsap.timeline();
    tl.to(".loading", { opacity: 0, delay: 2.5 })
      .to(".loader", { y: "-100%", duration: 1, ease: "Expo.easeInOut" });
  }, []);

  return (
    <div className="html">
      <div className="loader">
        <h2 className="zoom">UCHIHA</h2>
        <h1 className="scramble">UCHIHA</h1>
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default Loader;
