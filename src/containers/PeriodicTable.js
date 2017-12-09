import React, { Component } from 'react';
import data from '../Elements.json';
import Cube from '../components/Cube';

class PeriodicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {

    // Elements in Group 1 - 18
    const groupList = [
      [1, 3, 11, 19, 37, 55, 87],
      [4, 12, 20, 38, 56, 88],
      [21, 39, 57, 89], // 57-71 La-Lu, 89-103 Ac-Lr OR use "*/**"?
      [22, 40, 72, 104],
      [23, 41, 73, 105],
      [24, 42, 74, 106],
      [25, 43, 75, 107],
      [26, 44, 76, 108],
      [27, 45, 77, 109],
      [28, 46, 78, 110],
      [29, 47, 79, 111],
      [30, 48, 80, 112],
      [5, 13, 31, 49, 81, 113],
      [6, 14, 32, 50, 82, 114],
      [7, 15, 33, 51, 83, 115],
      [8, 16, 34, 52, 84, 116],
      [9, 17, 35, 53, 85, 117],
      [2, 10, 18, 36, 54, 86, 118],
    ]

    // Elements in Lanthanide and Actinide
    const specialList = [
      [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
      [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
    ]

    function getElementInfo(group) {
      const tmp = [];
      let newTmp;

      group.forEach( atomicNumber => {

        let matchedItem = data.elements.filter(obj => obj.number === atomicNumber);

        tmp.push(matchedItem)
        newTmp = tmp.reduce( (a, b) => a.concat(b), [])

      })

      return newTmp;
    }


    const renderCube = group => {
      const anotherTmp = getElementInfo(group);

      return (
        anotherTmp.map( el =>
          <Cube
            key={el.number}
            number={el.number}
            name={el.name}
            symbol={el.symbol}
            atomicMass={el.atomic_mass}
            category={el.category}
            showElementCard={this.props.showElementCard} />)
      )
    }

    return (
      <div className="periodic-table">
        <div className="main-table">
          <div className="group">{renderCube(groupList[0])}</div>
          <div className="group">{renderCube(groupList[1])}</div>
          <div className="group">{renderCube(groupList[2])}</div>
          <div className="group">{renderCube(groupList[3])}</div>
          <div className="group">{renderCube(groupList[4])}</div>
          <div className="group">{renderCube(groupList[5])}</div>
          <div className="group">{renderCube(groupList[6])}</div>
          <div className="group">{renderCube(groupList[7])}</div>
          <div className="group">{renderCube(groupList[8])}</div>
          <div className="group">{renderCube(groupList[9])}</div>
          <div className="group">{renderCube(groupList[10])}</div>
          <div className="group">{renderCube(groupList[11])}</div>
          <div className="group">{renderCube(groupList[12])}</div>
          <div className="group">{renderCube(groupList[13])}</div>
          <div className="group">{renderCube(groupList[14])}</div>
          <div className="group">{renderCube(groupList[15])}</div>
          <div className="group">{renderCube(groupList[16])}</div>
          <div className="group">{renderCube(groupList[17])}</div>
        </div>
        <div className="sub-table">
          <div className="table-row">{renderCube(specialList[0])}</div>
          <div className="table-row">{renderCube(specialList[1])}</div>
        </div>
      </div>
    )
  }


}

export default PeriodicTable;
