import React from 'react';
import { categoryColor } from '../utils';
import './Cube.css';

const Cube = (props) => {
  const { number, name, symbol, atomicMass, category, showElementCard } = props;

  const cubeBg = {
    background: `${categoryColor[category]}`
  }

  return (
    <a
      className="element-cube"
      onClick={(e) => showElementCard(e, number)}
      style={cubeBg}>
      <p className="number">{number}</p>
      <p className="symbol">{symbol}</p>
      <p className="name">{name}</p>
      <p className="atomic-mass">{Number.isInteger(atomicMass)? atomicMass : atomicMass.toFixed(3)}</p>
    </a>
  )
}

export default Cube;