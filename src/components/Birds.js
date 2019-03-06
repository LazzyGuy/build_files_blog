import React from "react";
import bird from "./bird.gif";

const hoverBirds = e => {
  let wy = document.documentElement.clientWidth,
    wx = document.documentElement.clientHeight;
  let bird = document.getElementById("bird");
  wy = wy - bird.offsetHeight;
  wx = wx - bird.offsetWidth;
  let rand = (max, min) => Math.floor(Math.random() * (max - min)) + min;
  let x = rand(wx, 0);
  let y = rand(wy, 0);
  bird.style.left = `${y}px`;
  bird.style.top = `${x}px`;
  console.log(x, y, bird);
};

const Bird = () => (
  <img
    onMouseOver={hoverBirds}
    onClick={hoverBirds}
    className="birds"
    alt="loading"
    src={bird}
    id="bird"
  />
);

export default Bird;
