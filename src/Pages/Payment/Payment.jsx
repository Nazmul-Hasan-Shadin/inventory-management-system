
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from './CheckOut/CheckOut';

const stripePromise = loadStripe('pk_test_51OBuOPEkmX02Z923q0hQwjIfcLTHJ9xmKCkiezlL9ywe6BaUzmL8vAywuBJ2eMMCAoO8qIH5YPznwcEp98zZ6cvH00k7i3RExU');


const Payment = () => {
    return (
        <div>
              <Elements stripe={stripePromise}>

        <CheckOut></CheckOut>
              </Elements>
        </div>
    );
};

export default Payment;