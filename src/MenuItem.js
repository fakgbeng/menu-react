const MenuItem = (props) => {
  // console.log(props.menu);
  return (
    <div className="menu-item">
      <img src={props.menu.img} alt={props.menu.title} className="menu-img" />
      <div className="menu-details">
        <h2>{props.menu.title}</h2>
        <div>${props.menu.price}</div>
        <p>{props.menu.desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
