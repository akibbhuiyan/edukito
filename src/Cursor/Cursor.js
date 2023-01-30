import React, { useEffect } from "react";
import "./Cursor.css";
import { useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
    mousecheck: false,
  });

  useEffect(() => {
    const handleMousePosition = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
        movex: e.movementX,
        movey: e.movementY,
      });
    };

    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  });
  useEffect(() => {
    const anc = document.querySelectorAll("a");
    const cursor = document.querySelector(".cursor");
    const dots = document.querySelector(".dots");
    anc.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        cursor.classList.add("cursor-hover");
        dots.classList.add("cursor-hover");
      });
    });
    anc.forEach((el) => {
      el.addEventListener("mouseout", (e) => {
        cursor.classList.remove("cursor-hover");
        dots.classList.remove("cursor-hover");
      });
    });
  });
  return (
    <>
      <div
        className={mousePosition.mousecheck ? "cursor mouseOut" : "cursor"}
        style={{
          left: mousePosition.x + "px",
          top: mousePosition.y + "px",
        }}
      ></div>
      <div
        className="dots"
        style={{
          left: mousePosition.x + "px",
          top: mousePosition.y + "px",
        }}
      ></div>
    </>
  );
};

export default Cursor;
