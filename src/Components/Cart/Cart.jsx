import { TrashIcon } from '@heroicons/react/24/solid'
import './Cart.css';

const Cart = ({ cart, handleRemovefromCart }) => {
    let msg;
    if (cart.length === 0) {
        msg = <p className='msg-text'>Please add some products</p>
    }
    return (
        <div>
            <h1 className={cart.length === 0 ? 'red' : 'blue'}>Order Summary: {cart.length}</h1>
            {msg}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}


                >{tshirt.name}<button onClick={() => { handleRemovefromCart(tshirt._id) }}> <TrashIcon className="h-5 w-6 text-blue-500" /></button> </p>)
            }
        </div>
    );
};

export default Cart;