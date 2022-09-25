import React, { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import randomIntFromInterval from '../utils/randomIntFromInterval';
import { getMergeSortAnimations } from '../algorithms/MergeSort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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

  const mergeSortHandler = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px` }} />
      ))}
      <button onClick={changeArrayHandler}>Generate new Array</button>
      <button onClick={mergeSortHandler}>MergeSort</button>
    </div>
  );
};

export default SortingVisualizer;
