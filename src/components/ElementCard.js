import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import './ElementCard.css';

const ElementCard = ({targetElement, hideElementCard}) => {

  const renderTableContent = (targetElement) => {
    return (
      <tbody>
        <tr>
          <th>Name</th>
          <td>{targetElement.name}</td>
        </tr>
        <tr>
          <th>Atomic Mass</th>
          <td>
            {
              Number.isInteger(targetElement.atomic_mass) ? targetElement.atomic_mass : targetElement.atomic_mass.toFixed(3)
            }
          </td>
        </tr>
        <tr>
          <th>Atomic Number</th>
          <td>{targetElement.number}</td>
        </tr>
        <tr>
          <th>Discovered By</th>
          <td>{targetElement.discovered_by}</td>
        </tr>
        <tr>
          <th>Category</th>
          <td className="category">{targetElement.category}</td>
        </tr>
        <tr>
          <th>Density</th>
          <td>{targetElement.density} g/cm<sup>3</sup></td>
        </tr>
        <tr>
          <th>Boiling Point</th>
          <td>{targetElement.boil} K</td>
        </tr>
        <tr>
          <th>Melting Point</th>
          <td>{targetElement.melt} K</td>
        </tr>
        <tr>
          <th>Electrons Per Shell</th>
          <td>
            [
              {targetElement.shells.map( (elc, i) => {
                let lastIndex = targetElement.shells.length - 1;
                if(i === lastIndex) {
                  return String(elc);
                } else {
                  return elc + ", ";
                }
              })}
            ]
          </td>
        </tr>
        <tr>
          <th>Appearance</th>
          <td className="appearance">{targetElement.appearance}</td>
        </tr>
        <tr>
          <td className="summary" colSpan="2">{targetElement.summary}</td>
        </tr>
      </tbody>
    )
  }

  return (
    <Draggable>
      <div className="element-card">
        <div className="helper-box">
          <div className="card-header">
            <div className="symbol-box">
              <p>{targetElement.symbol}</p>
            </div>
            <p className="drag-here">Drag here</p>
          </div>
          <table>
            {renderTableContent(targetElement)}
          </table>
          <button
            className="btn-close"
            onClick={(e)=>hideElementCard(e)}>X Close</button>
        </div>
      </div>
    </Draggable>
  )
}

ElementCard.propTypes = {
  targetElement: PropTypes.object,
  hideElementCard: PropTypes.func
};

export default ElementCard;
