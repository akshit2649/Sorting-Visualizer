import React, { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import randomIntFromInterval from '../utils/randomIntFromInterval';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 310; i++) {
      temp.push(randomIntFromInterval(5, 730));
    }
    setArray(temp);
  }, []);

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px` }} />
      ))}
    </div>
  );
};

export default SortingVisualizer;
