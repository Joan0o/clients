import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'material-components-web';
import * as mdc from 'material-components-web';

const checkbox = new mdc.checkbox.MDCCheckbox(document.querySelector('.mdc-checkbox'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="react-logo" alt="logo" />


          <button className="mdc-icon-button"
                  aria-label="Add to favorites"
                  aria-pressed="false"
                  data-mdc-auto-init="MDCIconButtonToggle">
            <i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
            <i className="material-icons mdc-icon-button__icon">favorite_border</i>
          </button>

        </header>
      </div>
    );
  }
}

export default App;
