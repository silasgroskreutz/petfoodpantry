import React from 'react';
import './Navigation.css';

class Navigation extends React.Component{ 
    render() {
        return (
            <div className="signout">
              <input
                onClick={this.onSubmitSignOut}
                type="submit"
                value="Sign out"
              />
            </div>
        )
    }
}

export default Navigation;