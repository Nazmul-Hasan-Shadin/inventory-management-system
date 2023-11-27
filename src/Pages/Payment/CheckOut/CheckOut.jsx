import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import { useLocation, useParams } from "react-router-dom";

const CheckOut = () => {

    
  const [clientSec, setClientSec] = useState('');

const location=useLocation()
const price= location.state.price

console.log(location);



  console.log('client sec',clientSec);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useaxiosSecure();
 
  const carts=useCart()
 const total= carts.reduce((total,cart)=>total+cart.sellingPrice,0) 

   const cartIds=carts.map((cart)=>cart.cartId)

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", {price:price || total})
    .then((res) => {
      console.log(res.data,'paymentintent');
      setClientSec(res.data.clientSecret)
    })
    .catch(err=>{
      console.log(err);
    })
    
    ;
  }, [axiosSecure,total,price])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: cofirmError } =
      await stripe.confirmCardPayment(clientSec, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    if (cofirmError) {
      console.log(cofirmError,'error payment');
    } else {
      console.log("payment itent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("succestpaymetn ", paymentIntent);

        // NOW SAVE PAYMENT INTO THE DATABASE

        const paymentInfo = {
          email: user?.email,
          transictionId: paymentIntent.id,

          date: new Date(),
          amount:paymentIntent.amount,
          cartId:carts.map((cart)=>cart.cartId)

        
        };

  //  if payment succes now insert payment info to saleCollection and update quantity of product
 
  axiosSecure.post("/paymentInfo",paymentInfo)
  .then(res=>{
    // if payment succesfull then update quantity and saleCount based on these [id]
     axiosSecure.patch(`/updateQuantity/${cartIds.join(',')}`)
    if (price) {
      axiosSecure.patch(`/productLimit/${user?.email}`,{price:price})
      .then(res=>{
        console.log('limit increase');
        axiosSecure.patch(`/adminIncome`,{email:'nazmulhasanshadin000@gmail.com'})
        .then(res=>{
           console.log('incoume increase')
        })
        .catch(err=>console.log(err))

      })

    }
     
  })
  .catch(err=>{
    console.log(err);
  })



      }
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-primary" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
