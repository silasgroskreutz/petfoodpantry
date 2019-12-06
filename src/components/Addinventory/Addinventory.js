import React from 'react';

class Addinventory extends React.Component {

render() {
    return (
      <article>
        <main>
          <div className="measure">
            <fieldset id="sign_up">
              <legend>Add to inventory</legend>
              <div>
                <label htmlFor="Quantity">Quantity : </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div>
                <label htmlFor="Brand">Brand : </label>
                <input
                  type="text"
                  name="Brand"
                  id="Brand"
                />
              </div>
              <div>
                <label htmlFor="Flavor">Flavor : </label>
                <input
                  type="text"
                  name="Flavor"
                  id="Flavor"
                />
              </div>
              <div>
                <label htmlFor="Size">Size : </label>
                <input
                  type="text"
                  name="Size"
                  id="Size"
                />
              </div>
              <div>
                <label htmlFor="Rx">Rx required : </label>
                <input
                  type="radio"
                  name="true"
                  id="true"
                />
                <label htmlFor="Rx">True</label>
                <input
                  type="radio"
                  name="false"
                  id="false"
                />
                <label htmlFor="Rx">False</label>
              </div>
            
            <div className="submission">
              <input
                type="submit"
                value="Add to Inventory"
              />
            <input
                type="submit"
                value="Cancel"
              />
            </div>
            </fieldset>
          </div>
        </main>
      </article>
    );
  }
}

export default Addinventory;