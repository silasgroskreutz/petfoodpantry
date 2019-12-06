import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
      return (
        <form className="Search">
          <button className="addbutton">Add item to Inventory</button>

          <input type="text" placeholder="Search by -->" />
          <select id = "myList">
               <option value = "1">Brand</option>
               <option value = "2">Flavor</option>
               <option value = "3">Size</option>
               <option value = "4">Rx</option>
             </select>
          <button>Search</button>
        </form>
      );
    }
  }

export default SearchBar;