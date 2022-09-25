import React, { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import randomIntFromInterval from '../utils/randomIntFromInterval';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [changeArray, setChangeArray] = useState(false);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 310; i++) {
      temp.push(randomIntFromInterval(5, 730));
    }
    setArray(temp);
  }, [changeArray]);

  const changeArrayHandler = () => {
    setChangeArray(prev => !prev);
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px` }} />
      ))}
      <button onClick={changeArrayHandler}>Generate new Array</button>
    </div>
  );
};

export default SortingVisualizer;
