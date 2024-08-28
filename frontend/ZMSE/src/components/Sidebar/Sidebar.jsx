import React from 'react';
import './Sidebar.scss';

const Sidebar = ({ onCheckboxChange }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          Style <br />
           <input type="radio" id="formal" name="style" value="formal" />
           <label htmlFor="formal">Formal</label><br />
           
           <input type="radio" id="business_casual" name="style" value="business_casual" />
           <label htmlFor="business_casual">Business Casual</label><br />
           
           <input type="radio" id="casual" name="style" value="casual" />
           <label htmlFor="casual">Casual</label>
        </li>


        <li>Season <br />
          <input type="radio" id="winter-fall" name="season" value="winter-fall" />
          <label htmlFor="winter-fall">Formal</label><br />
           
          <input type="radio" id="spring-summer" name="season" value="spring-summer" />
          <label htmlFor="spring-summer">Business Casual</label><br />
        </li>


        <li>
          <label for="color">Color</label> <br />
          <select name="color" id="color">
            <option value="olive">olive</option>
            <option value="beige">beige</option>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="cream">cream</option>
            <option value="navy">navy</option>
            <option value="blue">blue</option>
            <option value="gray">gray</option>
            <option value="green">green</option>
            <option value="pink">pink</option>
            <option value="yellow">yellow</option>
            <option value="khaki">khaki</option>
            <option value="red">red</option>
            <option value="multicolor">multicolor</option>
            <option value="brown">brown</option>
          </select>
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
