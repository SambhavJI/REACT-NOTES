import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { id } = useParams();
    useEffect(() => {
        fetchMenu();
    }, [])
    const [menu, setMenu] = useState([]);

    const fetchMenu = async () => {
        const data = [
            {
                "resName": "Spice Garden",
                "cuisine": "Indian",
                "rating": 3.5,
                "location": "123 Curry Lane, Downtown",
                "menu": ["Paneer Butter Masala", "Dal Makhani", "Jeera Rice", "Naan", "Chicken Tikka Masala", "Samosa"]
            },
            {
                "resName": "Sakura Sushi",
                "cuisine": "Japanese",
                "rating": 4.7,
                "location": "456 Bento Blvd, East District",
                "menu": ["Salmon Nigiri", "California Roll", "Tonkotsu Ramen", "Edamame", "Tempura Udon", "Miso Soup"]
            },
            {
                "resName": "La Bella Italia",
                "cuisine": "Italian",
                "rating": 2.3,
                "location": "789 Pasta St, Little Italy",
                "menu": ["Spaghetti Carbonara", "Margherita Pizza", "Chicken Parmesan", "Garlic Bread", "Tiramisu", "Minestrone Soup"]
            },
            {
                "resName": "El Toro Loco",
                "cuisine": "Mexican",
                "rating": 4.2,
                "location": "101 Taco Ave, Market Square",
                "menu": ["Carne Asada Tacos", "Guacamole & Chips", "Beef Burrito", "Chiles Rellenos", "Horchata", "Flan"]
            },
            {
                "resName": "Dragon Wok",
                "cuisine": "Chinese",
                "rating": 3.0,
                "location": "202 Wok Way, Chinatown",
                "menu": ["Kung Pao Chicken", "Fried Rice", "Spring Rolls", "Sweet and Sour Pork", "Hot and Sour Soup", "Egg Foo Young"]
            },
            {
                "resName": "Burger Haven",
                "cuisine": "American",
                "rating": 4.1,
                "location": "303 Patty Place, West End",
                "menu": ["Classic Cheeseburger", "Bacon Deluxe", "Crispy Chicken Sandwich", "French Fries", "Onion Rings", "Chocolate Shake"]
            },
            {
                "resName": "Le Petit Bistro",
                "cuisine": "French",
                "rating": 4.6,
                "location": "404 Rue de Paris, Uptown",
                "menu": ["Coq au Vin", "Steak Frites", "French Onion Soup", "Croque Monsieur", "Crème Brûlée", "Escargots"]
            },
            {
                "resName": "Tandoori Tales",
                "cuisine": "Indian",
                "rating": 3.4,
                "location": "505 Masala Rd, Northside",
                "menu": ["Paneer Butter Masala", "Dal Makhani", "Jeera Rice", "Naan", "Lamb Rogan Josh", "Vegetable Biryani"]
            },
            {
                "resName": "Seoul Kitchen",
                "cuisine": "Korean",
                "rating": 4.3,
                "location": "606 Kimchi St, Koreatown",
                "menu": ["Bibimbap", "Bulgogi", "Kimchi Stew", "Korean Fried Chicken", "Japchae", "Seafood Pancake"]
            },
            {
                "resName": "Mediterraneo",
                "cuisine": "Mediterranean",
                "rating": 4.5,
                "location": "707 Olive St, Riverside",
                "menu": ["Gyro Plate", "Hummus & Pita", "Chicken Shawarma", "Greek Salad", "Falafel", "Baklava"]
            }
        ]
        setMenu(data);
    }
    return (
        <div className="restaurant-menu">
            {menu.length > 0 && (
                <>
                    <h1>{menu[id].resName}</h1>
                    <h2>{menu[id].cuisine}</h2>
                    <h3>Rating: {menu[id].rating} Stars</h3>
                    <h3>Location: {menu[id].location}</h3>
                    <h2>Menu:</h2>
                    <ul>
                        {menu[id].menu.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>

    )
}
export default RestaurantMenu;