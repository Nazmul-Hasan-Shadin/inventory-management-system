import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckOut = () => {

    
  const [clientSec, setClientSec] = useState();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useaxiosSecure();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", {}).then((res) => {
      console.log(res.data);
    });
  }, []);

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
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    if (cofirmError) {
      console.log(cofirmError);
    } else {
      console.log("payment itent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transiction id", paymentIntent.id);

        // NOW SAVE PAYMENT INTO THE DATABASE

        const payment = {
          email: user.email,
          transictionId: paymentIntent.id,

          date: new Date(),

          status: "pending",
        };
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
