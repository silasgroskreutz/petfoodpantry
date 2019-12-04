import React from 'react';

class SearchBar extends React.Component {
    render() {
      return (
        <form>
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