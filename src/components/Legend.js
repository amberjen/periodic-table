import React from 'react';
import { categoryList, categoryColor } from '../utils';
import './Legend.css';

const Legend = () => {

  function renderCategoryColor(type) {
    let bgColor = categoryColor[type];
    let bgStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: `${bgColor}`,
      marginRight: '.35rem'
    }
    return (
      <div style={bgStyle} />
    )
  }

  function renderLegendItem(category) {
    return (
      <li>{renderCategoryColor(category)} {category}</li>
    )
  }

  return (
    <div className="legend-box">
      <div className="legend-content">
        <ul>
          {renderLegendItem(categoryList[0])}
          {renderLegendItem(categoryList[1])}
          {renderLegendItem(categoryList[2])}
          {renderLegendItem(categoryList[3])}
        </ul>
        <ul>
          {renderLegendItem(categoryList[4])}
          {renderLegendItem(categoryList[5])}
          {renderLegendItem(categoryList[6])}
          {renderLegendItem(categoryList[7])}
        </ul>
        <ul>
          {renderLegendItem(categoryList[8])}
          {renderLegendItem(categoryList[9])}
          {renderLegendItem(categoryList[10])}
        </ul>
      </div>

    </div>
  )
}

export default Legend;
