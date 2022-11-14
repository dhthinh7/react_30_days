import React, { useEffect, useRef, useState } from "react";
import "./Clock.scss";

export default function Clock() {

  let ref = useRef();
  let [{hh, mm, ss}, setRatio] = useState({hh:10, mm:20, ss:30});
  
  const getTime = () => {
    // Code with JS
    // const hourHand = document.querySelector('[data-hour]');
    // const minuteHand = document.querySelector('[data-minute]');
    // const secondHand = document.querySelector('[data-second]');
    let date = new Date();
    hh = (date.getHours() + mm) / 12;
    mm = (date.getMinutes() + ss) / 60;
    ss = date.getSeconds() / 60;
    setRatio({hh: hh, mm: mm, ss: ss});

    // Code with JS
    // setRotation(hourHand, hh);
    // setRotation(minuteHand, mm);
    // setRotation(secondHand, ss);
  }

  // JS
  // const setRotation = (element, rotationRatio) => {
  //   element.style?.setProperty('--rotation', rotationRatio * 360 + 'deg');
  // }

  useEffect(() => {
    ref.current = setInterval(() => getTime(), 1000);
    return () => clearInterval(ref.current);
  }, [])

  const renderNumber = () => {
    let numbers = [];
    for (let i = 1; i < 13; i++) {
      numbers.push(<div key={i} className={`num number${i}`} data-num={i}>{i}</div>)
    }
    return numbers;
  }
  return <section className="container">
    <h2>Day 3: Clock React & JS</h2>
    <div className="clock">
      <div className="clock-hand">
        <div className="hour" data-hour style={{transform: `translate(-50%, 0) rotate(${hh * 360}deg)`}}></div>
        <div className="minute" data-minute style={{transform: `translate(-50%, 0) rotate(${mm * 360}deg)`}}></div>
        <div className="second" data-second style={{transform: `translate(-50%, 0) rotate(${ss * 360}deg)`}}></div>
      </div>
      <div className="number">
        {renderNumber()}
      </div>
    </div>
  </section>;
}
