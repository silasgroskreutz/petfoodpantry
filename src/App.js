import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import SearchBar from './components/SearchBar/SearchBar';
import Navigation from './components/Navigation/Navigation';
import Inventory from './components/Inventory/Inventory';
import Signin from './components/Signin/Signin';
import Addinventory from './components/Addinventory/Addinventory';
import Editinventory from './components/Editinventory/Editinventory';

class App extends Component {
  constructor() {
    super();
    this.state = { displayAddInv: false }
  }

  _displayAddInv = (bool) => {
    this.setState({
      displayAddInv: !this.state.displayAddInv
    })
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Navigation />
        <SearchBar />
        <Addinventory />
        <Inventory />
      </div>
      );
  }
}

export default App;
