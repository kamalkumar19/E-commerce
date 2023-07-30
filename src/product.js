import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { ActionCreator } from "redux";
// import { actionCreator } from "./state";

function product({ title, img, name, img2, name2, img3, name3, img4, name4 }) {
  // const dispatch = useDispatch();
  // const [{ basket }, dispatch] = useStateValue();

  // const addtobasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       // id: id,
  //       title: title,
  //       image: img,
  //       name: name,
  //     },
  //   });
  // };
  return (
    <div className="Product">
      <h3 className="title">{title}</h3>
      <div className="Product_one">
        <div className="ok">
          <img src={img} alt="fhklfgjgg" />
          <p className="name">{name}</p>
        </div>
        <div>
          <img src={img2} alt="fhklfgjgg" />
          <p className="name">{name2}</p>
        </div>
      </div>
      <div className="product_two">
        <div className="ok">
          <img src={img3} alt="fkfljj" />
          <p className="name">{name3}</p>
        </div>
        <div>
          <img src={img4} alt="fhklfgjgg" />
          <p className="name">{name4}</p>
        </div>
      </div>
      <Link to="/show">
        <p className="ok">see more</p>
      </Link>
    </div>
  );
}

export default product;
