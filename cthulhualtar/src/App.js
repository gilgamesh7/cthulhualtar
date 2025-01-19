import React, { useState, useEffect } from 'react';
import init,{ get_rlyeh_location } from 'rust_wasm_functions';

function Altar() {
  const [rlyeh_location, setRlyehLocation] = useState([]);
  // const [awakeningTime, setAwakeningTime] = useState('');

  useEffect(() => {
    const loadWASM = async () => {
      await init();
      const rlyeh_location = get_rlyeh_location();
      setRlyehLocation(rlyeh_location);
    };
    loadWASM();
  }, []);


  return (
    <div className="altar">
      <h1>{rlyeh_location}</h1>
    </div>
  );
}

export default Altar;
