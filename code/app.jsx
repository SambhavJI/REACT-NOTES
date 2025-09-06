import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet,Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
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
        src="data:image/jpeg;base64,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"
        alt="restaurant"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
    </div>
  );
};

const Body = () => {
  const restaurantData = [
    { resName: "Spice Garden", cuisine: "Indian", rating: 3.5 },
    { resName: "Sakura Sushi", cuisine: "Japanese", rating: 4.7 },
    { resName: "La Bella Italia", cuisine: "Italian", rating: 2.3 },
    { resName: "El Toro Loco", cuisine: "Mexican", rating: 4.2 },
    { resName: "Dragon Wok", cuisine: "Chinese", rating: 3.0 },
    { resName: "Burger Haven", cuisine: "American", rating: 4.1 },
    { resName: "Le Petit Bistro", cuisine: "French", rating: 4.6 },
    { resName: "Tandoori Tales", cuisine: "Indian", rating: 3.4 },
    { resName: "Seoul Kitchen", cuisine: "Korean", rating: 4.3 },
    { resName: "Mediterraneo", cuisine: "Mediterranean", rating: 4.5 },
  ];

  const [restaurants, setRestaurants] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filtered = restaurantData.filter((res) =>
                res.resName.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filter_data = restaurantData.filter((res) => res.rating > 4);
            setRestaurants(filter_data);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
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
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    children:[{
    path: "/about",
    element: <About />
  },{
    path: "/contact",
    element: <Contact />
  },{
    path: "/",
    element: <Body />
  },{
    path: "/restaurant/:id",
    element: <RestaurantMenu />
  }],
    element: <AppLayout />
  }
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);
