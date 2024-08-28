import React from 'react';
import './Sidebar.scss';

const Sidebar = ({ onCheckboxChange }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          Style <br />
          <button>Formal</button> <br />
          <button>Business Casual</button> <br />
          <button>Casual</button>
        </li>

        <li>Season <br />
          <button>Winter-Fall</button> <br />
          <button>Spring-Summer</button>
        </li>
        <li>
        <label htmlFor="color">Color</label> <br />
        <input type="color" id="sidebar__list-color"></input>
        </li>
        <li>
          <label htmlFor="accessory">Accessory</label>
          <input
            type="checkbox"
            id="sidebar__list-accessory"
            name="accessory"
            value="accessory"
            onChange={onCheckboxChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
