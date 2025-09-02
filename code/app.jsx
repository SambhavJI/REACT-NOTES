import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src="data:image/png;base64,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"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
    </div>
  );
}
const Body = () => {
  const [mock_data, setListOfRes] = useState([
    { resName: "Spice Garden", cuisine: "Indian", rating: 3.5 },
    { resName: "Sakura Sushi", cuisine: "Japanese", rating: 4.7 },
    { resName: "La Bella Italia", cuisine: "Italian", rating: 2.3 },
    { resName: "El Toro Loco", cuisine: "Mexican", rating: 4.2 },
    { resName: "Dragon Wok", cuisine: "Chinese", rating: 3.0 },
    { resName: "Burger Haven", cuisine: "American", rating: 4.1 },
    { resName: "Le Petit Bistro", cuisine: "French", rating: 4.6 },
    { resName: "Tandoori Tales", cuisine: "Indian", rating: 3.4 },
    { resName: "Seoul Kitchen", cuisine: "Korean", rating: 4.3 },
    { resName: "Mediterraneo", cuisine: "Mediterranean", rating: 4.5 }
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filter_data = mock_data.filter((res) => res.rating > 4);
            setListOfRes(filter_data);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="restaurant-list">
        {mock_data.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            resName={restaurant.resName}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
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

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
