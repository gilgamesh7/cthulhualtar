import React, { useState, useEffect } from 'react';

function Altar() {
  const [glyphs, setGlyphs] = useState([]);
  // const [awakeningTime, setAwakeningTime] = useState('');

  useEffect(() => {
    // Simulate glyph animations
    const interval = setInterval(() => {
      setGlyphs((prev) => [...prev, generateRandomGlyph()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
    // Countdown to awakening (fetch from Rust WASM)
    // const updateCountdown = async () => {
    //   const { calculateTimeLeft } = await import('wasm_module');
    //   setAwakeningTime(calculateTimeLeft());
    // };

    // const interval = setInterval(updateCountdown, 1000);
    // return () => clearInterval(interval);
  // }, []);

  return (
    <div className="altar">
      <h1>The Altar of Cthulhu</h1>
      <div className="glyphs">
        {glyphs.map((glyph, index) => (
          <div key={index} className="glyph">{glyph}</div>
        ))}
      </div>
      {/* <div className="countdown">
        <h2>Countdown to Awakening</h2>
        <p>{awakeningTime}</p>
      </div> */}
    </div>
  );
}

function generateRandomGlyph() {
  const glyphs = ['𓂀', '⚛️', '☉', '☾', 'ᛝ'];
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

export default Altar;
