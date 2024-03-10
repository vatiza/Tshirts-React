import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import './Home.css'
import { useState } from "react";
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }
    const handleRemovefromCart = (id) => {
        const exists = cart.find(ts => ts._id === tshirts._id);
        if (exists) {
            toast('You already added this t-shirt');

        } else {
            const remaining = cart.filter(ts => ts._id !== id);
            setCart(remaining);
        }

    }

    console.log(tshirts);
    return (
        <div className="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}

                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemovefromCart={handleRemovefromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;