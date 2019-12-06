import React from 'react';
import Logo from './components/Logo/Logo';
import SearchBar from './components/SearchBar/SearchBar';
import Navigation from './components/Navigation/Navigation';
import Inventory from './components/Inventory/Inventory';
import Signin from './components/Signin/Signin';
import Addinventory from './components/Addinventory/Addinventory';
import Editinventory from './components/Editinventory/Editinventory';

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <Navigation />
      <Inventory />
      <Signin />
      <Addinventory />
      <Editinventory />
    </div>
  );
}

export default App;
