import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateprovider";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const amount = useSelector((state) => state.amount);
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header_logo"
            alt="ok"
          />
        </Link>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">
            <LocationOnOutlinedIcon /> Select Your Adderss
          </span>
        </div>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchIN" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthenticaton}>
            <span className="header_optionLineOn">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="list">
          <center>
            <button className="list_button">sign in</button>
            <br />
            <br />
            <hr />
            <p>fksdsfjk</p>
            <p>fjsfjkjjslkf</p>
          </center>
        </div>
        <div className="header_option">
          <span className="header_optionLineOn">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
      </div>
      <div className="header_Basket">
        <Link to="/checkout">
          <ShoppingCartIcon className="header_basketIN" />
        </Link>
        <span className="List">{amount}</span>
        <span className="card">cart</span>
      </div>
      <div>{basket?.length}</div>
    </div>
  );
}

export default Header;
