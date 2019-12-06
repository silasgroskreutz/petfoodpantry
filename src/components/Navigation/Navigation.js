import React from 'react';
import './Navigation.css';

class Navigation extends React.Component{ 
    render() {
        return (
            <div>
              <input
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Sign out"
              />
            </div>
        )
    }
}

export default Navigation;