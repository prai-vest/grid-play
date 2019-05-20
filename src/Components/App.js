import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import './App.scss'

import ExampleBlock from './Grids/ExampleBlock'
import ReferenceList from './ReferenceList/ReferenceList'
import { GridsAsObject, GridsAsArray } from './Grids/Grids'

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (
    c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)) //eslint-disable-line
}

class App extends Component {
  state = {
    currentGridKey: 'demo',
  }

  asideListClickHandler = (key) => {
    this.setState({
      currentGridKey: key,
    })
  }

  render() {
    const { currentGridKey } = this.state
    const currentGrid = GridsAsObject[currentGridKey]
    return (
      <div>
        <header id="header">
          <h1>Ag-Grid Demo</h1>
        </header>
        <div id="wrapper">
          <aside className="aside-nav">
            <h2>References</h2>
            <ReferenceList
              GridsAsArray={GridsAsArray}
              currentGridKey={currentGridKey}
              asideListClickHandler={this.asideListClickHandler}
            />
          </aside>
          <section className="content">
            {
              currentGrid.exampleBlocks.map(item => (
                <ExampleBlock grid={item.grid} info={item.info} key={uuidv4()} height={item.height} />
              ))
            }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
