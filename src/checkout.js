import React from "react";
import "./checkout.css";
import Subtotal from "./subtotal";
import Product from "./checkOutProduct";
import { useStateValue } from "./stateprovider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="left">
        <h1>Your Shopping Detail</h1>
        <hr />
        <br />
        {basket.map((item) => (
          <Product
            name={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}
        <hr />
      </div>
      <div className="right">
        <h3>Your subtotal </h3>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
