import React, { useState, useEffect } from 'react';
import init, { get_rlyeh_location, calculate_time_to_awaken } from 'rust_wasm_functions';

function Altar() {
  const [rlyeh_location, setRlyehLocation] = useState([]);
  const [awakeningTime, setAwakeningTime] = useState([]);

  useEffect(() => {
    const loadWASM = async () => {
      await init();

      const rlyeh_location = get_rlyeh_location();
      setRlyehLocation(rlyeh_location);

      const awakeningTime = calculate_time_to_awaken();
      setAwakeningTime(awakeningTime);
    };
    loadWASM();
  }, []);


  return (
    <div className="altar">
      <h1>{rlyeh_location}</h1>
      <h2>{awakeningTime}</h2>
    </div>
  );
}

export default Altar;
