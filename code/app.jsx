import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, Link, useParams } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import useOnlineStatus from "./utils/useOnlineStatus";
import {lazy} from "react";

// ------------------ Header ------------------
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-end bg-pink-100 shadow-lg h-15 pt-4">
      <div>
        <ul className="flex padding-10 gap-10">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

// ------------------ Restaurant Data ------------------
const restaurantList = [
  {
    id: "1",
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30 minutes",
    menu: [
      { name: "Margherita Pizza", price: 299, isVeg: true },
      { name: "Pepperoni Pizza", price: 349, isVeg: false },
      { name: "Pasta Alfredo", price: 249, isVeg: true }
    ],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
  },
  {
    id: "2",
    name: "Beijing Bites",
    cuisine: "Chinese",
    rating: 4.3,
    deliveryTime: "35 minutes",
    menu: [
      { name: "Kung Pao Chicken", price: 329, isVeg: false },
      { name: "Veg Noodles", price: 199, isVeg: true },
      { name: "Dim Sum", price: 249, isVeg: true }
    ],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
  },
  {
    id: "3",
    name: "Biryani House",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "40 minutes",
    menu: [
      { name: "Chicken Biryani", price: 299, isVeg: false },
      { name: "Veg Biryani", price: 249, isVeg: true },
      { name: "Butter Naan", price: 49, isVeg: true }
    ],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
  },
  {
    id: "4",
    name: "Burger Boulevard",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "25 minutes",
    menu: [
      { name: "Classic Chicken Burger", price: 199, isVeg: false },
      { name: "Veggie Supreme", price: 179, isVeg: true },
      { name: "French Fries", price: 99, isVeg: true }
    ],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"
  },
  {
    id: "5",
    name: "Sushi Station",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "45 minutes",
    menu: [
      { name: "California Roll", price: 349, isVeg: false },
      { name: "Vegetable Roll", price: 299, isVeg: true },
      { name: "Miso Soup", price: 149, isVeg: true }
    ],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
  },
  {
    id: "6",
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "35 minutes",
    menu: [
      { name: "Chicken Tacos", price: 279, isVeg: false },
      { name: "Bean Burrito", price: 229, isVeg: true },
      { name: "Nachos", price: 199, isVeg: true }
    ],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552"
  }
];

// ------------------ Restaurant Card ------------------
const RestaurantCard = ({ restaurant }) => (
  <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: "none" }}>
    <div className="restaurant-card">
      <img className="w-56"src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>⭐ {restaurant.rating}</p>
      <p>🕒 {restaurant.deliveryTime}</p>
    </div>
  </Link>
);

// ------------------ Body ------------------
const Body = () => (
  <div className="flex-nowrap bg-blue-400" >
    {restaurantList.map((rest) => (
      <RestaurantCard key={rest.id} restaurant={rest} />
    ))}
  </div>
);

// ------------------ Restaurant Menu ------------------
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = restaurantList.find((r) => r.id === id);

  if (!restaurant) return <div>Restaurant not found.</div>;

  return (
    <div className="flex">
      <h2>{restaurant.name} Menu</h2>
      <ul>
        {restaurant.menu.map((item, idx) => (
          <li key={idx}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ------------------ App Layout ------------------
const AppLayout = () => {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>Looks like you are offline 🚫</h1>;
  }

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// ------------------ Router ------------------
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
