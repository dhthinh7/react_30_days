import React from "react";
import './CircleBarProgressTwo.scss';

export default function CircleBarProgressTwo() {
  return <section className="container">
    <h2>Day2: Circle progress </h2>
    <div className="circle-progress">
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle"> 70% </div>
      </div>
    </div>
  </section>
}
