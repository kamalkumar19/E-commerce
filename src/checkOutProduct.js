import React from "react";
import "./checkoutproduct.css";

function checkOutProduct({ img, name, price, rating }) {
  return (
    <div className="containers">
      <div className="lefts">
        <img src={img} alt="" />
      </div>
      <div className="rights">
        <p>{name}</p>
        <p>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="star">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <br />
        <button className="remove">Remove from basket</button>
      </div>
    </div>
  );
}

export default checkOutProduct;
