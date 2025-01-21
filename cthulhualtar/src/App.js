import React, { useState, useEffect, useRef } from 'react';
import init, { get_rlyeh_location, calculate_time_to_awaken } from 'rust_wasm_functions';

function Altar() {
  const [rlyeh_location, setRlyehLocation] = useState([]);
  const [awakeningTime, setAwakeningTime] = useState([]);
  const timerRef = useRef(null); // Use ref instead of state for timer ID to avoid triggering eslint error "React Hook useEffect has a missing dependency"


  useEffect(() => {

    let active = true; // Track if the component is still mounted

    const loadWASM = async () => {
      await init();

      const rlyeh_location = get_rlyeh_location();
      setRlyehLocation(rlyeh_location);

      const scheduleNextUpdate = () => {
        if (!active) {
          return;
        }

        const awakeningTime = calculate_time_to_awaken();
        setAwakeningTime(awakeningTime);

        // Generate a random interval between 1 and 6 seconds
        const nextInterval = Math.floor(Math.random() * 6 + 1) * 1000; // Random time between 1 and 6 seconds

        // Schedule the next update
        timerRef.current = setTimeout(() => {
          scheduleNextUpdate();
        }, nextInterval);

      };

      // Start the first update
      scheduleNextUpdate();
    };

    loadWASM();

    // Cleanup on component unmount
    return () => {
      active = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []); // Dependency array is empty to ensure the effect runs once


  return (
    <div className="altar">
      <h1>{rlyeh_location}</h1>
      <h2>{awakeningTime}</h2>
    </div>
  );
}

export default Altar;
