import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                Style
                <button>Formal</button>
                <button>Business Casual</button>
                <button>Casual</button>
            </li>

            <li>Season
                <button>Winter-Fall</button>
                <button>Spring-Summer</button>
            </li>
            <li>Color
            </li>
            <li>
            <input type="checkbox" id="sidebar__list-accessory" name="accessory" value="accessory"></input>
            <label htmlFor="accessory">Accessory</label><br/>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;
