import React from "react";
import items from "./data";
import { useState } from "react";
import MenuItem from "./MenuItem";
const Categories = () => {
  const menuData = items;
  const [menu, setMenu] = useState(menuData);
  const allHandler = () => {
    return setMenu(menuData);
  };
  const breakfastHandler = () => {
    return setMenu(menuData.filter((menu) => menu.category === "breakfast"));
  };
  const lunchHandler = () => {
    return setMenu(menuData.filter((menu) => menu.category === "lunch"));
  };
  const shakesHandler = () => {
    return setMenu(menuData.filter((menu) => menu.category === "shakes"));
  };

  return (
    <div className="categories">
      <div className="btn-container">
        <button onClick={allHandler}>All</button>
        <button onClick={breakfastHandler}>Breakfast</button>
        <button onClick={lunchHandler}>Lunch</button>
        <button onClick={shakesHandler}>Shakes</button>
      </div>
      <div className="menu-container">
        {menu.map((menu) => {
          return <MenuItem menu={menu} key={menu.id} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
