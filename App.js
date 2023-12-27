import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - RestaurantContainer
 *      - RestaurantCard
 *         -Img
 *         -Name of Res,Star Rating ,cuisine , delivery time
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

// header

const Header = () => {
  return (
    <div className="header">
      <div className=" logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// const color = { backgroundColor: "yellow" };
const RestaurantCard = (props) => {
  {
    console.log(props);
  }
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/unionl8yysinb1g9zm49"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine} </h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Megahana foods"
          cuisine="andhra food , south indian"
        />
        <RestaurantCard resName="kfc " cuisine="american food , burger" />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
