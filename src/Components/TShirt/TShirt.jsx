/* eslint-disable react/prop-types */

import './TShirt.css'
const TShirt = ({ tshirt, handleAddToCart }) => {

    const { picture, name, price } = tshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={() => { handleAddToCart(name) }} className="bg-blue-500 hover:bg-blue-700 text-white  p-1  rounded">
                Buy Now
            </button>
        </div>
    );
};

export default TShirt;