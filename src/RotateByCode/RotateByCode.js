import React, { useEffect, useRef, useState } from "react";
import "./RotateByCode.scss";

export default function RotateByCode() {
  let refDom = useRef();
  let ref = useRef();
  let [deg, setDeg] = useState(360);
  let [revert, setRevert] = useState(1)

  const handleRotate = (revert) => {
    setDeg(prev => prev - 0.5 * revert);
  }

  const reset = () => {
    clearInterval(ref.current);
  }

  const MouseOver = async (e) => {
    e.target.style.background = 'red';
    setRevert(revert * (-1))
    reset();
  }

  const MouseOut = (e) => {
    e.target.style.background = '';
    ref.current = setInterval(() => handleRotate(revert), 20)
  }

  useEffect(() => {
    ref.current = setInterval(() => handleRotate(revert), 20);
    return () => reset();
  }, [])

  if (deg === 0) {
    setDeg(360);
  }



  return <section className="container">
    <h2>Day1: Pause and Revert direction when rectangle is hovered</h2>
    <div className="rotate">
      <div className="countdown" style={{ transform: `rotate(${deg}deg) translate(-50%, -50%)` }} ref={refDom} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        {deg}
      </div>
    </div>
  </section>
}
