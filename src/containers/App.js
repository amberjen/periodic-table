import React, { Component } from 'react';
import Header from '../components/Header';
import Legend from '../components/Legend';
import PeriodicTable from './PeriodicTable';
import ElementCard from '../components/ElementCard';
import Footer from '../components/Footer';
import data from '../Elements.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetElement: null,
      showCard: false,
    }

    this.showElementCard = this.showElementCard.bind(this);
    this.hideElementCard = this.hideElementCard.bind(this);
    this.getElementInfo = this.getElementInfo.bind(this);
  }

  showElementCard(e, atomicNumber) {
    e.preventDefault();

    let targetEl = this.getElementInfo(atomicNumber);

    this.setState({
      targetElement: targetEl,
      showCard: true,
    });
  }

  hideElementCard(e) {
    e.preventDefault();

    this.setState({
      targetElement: null,
      showCard: false,
    });
  }

  getElementInfo(atomicNumber) {
    let matchedItem = data.elements.filter( obj => obj.number === atomicNumber);
    return matchedItem[0];
  }


  render() {

    const { targetElement, showCard } = this.state;

    return (
      <div className="app">
        <Header />
        <section className="main-section">
          <Legend />
          <PeriodicTable showElementCard={this.showElementCard} />
          { showCard &&
            <ElementCard
              targetElement={targetElement}
              hideElementCard={this.hideElementCard} /> }
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
