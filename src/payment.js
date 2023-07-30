import React, { useEffect, useState } from "react";
// import { FaBasketballBall } from "react-icons/fa";
// import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useStateValue } from "./stateprovider";
import Product from "./checkOutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer2";
import axios from "./axios";
import "./payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const element = useElements();

  const [error, seterr] = useState(null);
  const [disable, setdisable] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setclientSecret] = useState(true);
  // useEffect(() => {
  //   const getclientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //     });
  //     setclientSecret(response.data.clientSecret);
  //   };
  //   getclientSecret();
  // }, [basket]);
  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setclientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log("the", clientSecret);
  const handlesubmits = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        seterr(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };
  const handlechange = (event) => {
    setdisable(event.empty);
    seterr(event.error ? event.error.message : "");
  };

  return (
    <div className="container">
      <div>
        <Link to="/">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" />
        </Link>
        <h1>Checkout</h1>
        <div className="line"></div>
        {/* <LockPersonIcon /> */}
      </div>
      <div>
        <div>
          <h2>Dilevery Address</h2>
        </div>
        <div className="detail">
          <p>{user?.email}</p>
          <p></p>
          <p></p>
        </div>
        <div>
          <div>
            <h2>Item</h2>
          </div>
          <div className="items">
            {basket.map((item) => (
              <Product
                img={item.img}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <h2>Payment Method</h2>
          </div>
          <div className="card_detail">
            <form onSubmit={handlesubmits}>
              <CardElement onChange={handlechange} />
              <div className="total-price">
                <CurrencyFormat
                  decimalScale={2} // how many decimal place needed
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  //4,000
                  thousandSeparator={true}
                  prefix={"your total ₹"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
