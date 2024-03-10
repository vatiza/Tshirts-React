import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({ cart, handleRemovefromCart }) => {
    return (
        <div>
            <h1>Order Summary{cart.length}</h1>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}


                >{tshirt.name}<button onClick={() => { handleRemovefromCart(tshirt._id) }}> <TrashIcon className="h-5 w-6 text-blue-500" /></button> </p>)
            }
        </div>
    );
};

export default Cart;