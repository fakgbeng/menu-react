import React from "react";
import Categories from "./Categories";

const Menu = () => {
  return (
    <section className="container">
      <div className="header-container">
        <h2 className="header">Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
    </section>
  );
};

export default Menu;
