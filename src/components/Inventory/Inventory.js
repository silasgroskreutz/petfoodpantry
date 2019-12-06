import React from 'react';
import './inventory.css';
import bag1 from "./bag1.jpg";

/* const tempinv = [
    { quantity: 10, brand: "puppy's best", flavor: "Beef", size: "2 lbs", Rx: "False" },
    { quantity: 15, brand: "puppy's best", flavor: "Chicken", size: "2 lbs", Rx: "False" },
    { quantity: 8, brand: "puppy's second best", flavor: "Tuna", size: "2 lbs", Rx: "True" },
    { quantity: 1, brand: "puppy's second best", flavor: "Liver", size: "2 lbs", Rx: "False" },
    { quantity: 3, brand: "better than nothing", flavor: "Gizzard", size: "2 lbs", Rx: "False" },
] */

class Inventory extends React.Component{ 

    render() {
        return (
            <div>
                <h2>CURRENT INVENTORY</h2>
                <div className="invitem">
                    <ul>
                        <img alt="generic bag" className="generic" src={bag1} />
                        <button>Edit Info</button>
                        <li>Quantity: 10</li>
                        <li>Brand: Puppy's best</li>
                        <li>Flavor: Beef</li>
                        <li>Size: 2 lbs</li>
                        <li>Rx: False</li>
                    </ul>
                    <ul>
                        <img alt="generic bag" className="generic" src={bag1} />
                        <button>Edit Info</button>
                        <li>Quantity: 20</li>
                        <li>Brand: Puppy's second best</li>
                        <li>Flavor: Tuna</li>
                        <li>Size: 2 lbs</li>
                        <li>Rx: Tuna</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Inventory;