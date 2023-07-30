import React, { useEffect } from "react";
// import ReactDOM from "react-dom"
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./checkout";
import Header2 from "./header2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import checkout from "./checkout";
import Login from "./login";
import Show from "./second";
import Payment from "./payment";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";
import { type } from "@testing-library/user-event/dist/type";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51M2TzCSCDpoEKLp8bOFcG5A2jPWhCGe7X1vkysZKFSAO9oBXwO1HwUiXx7ciQV4tBhzvrcZIalDsmsMfQuhsvDGu00v6M9MFfU"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            {/* <Header/> */}
            <Header />
            <Header2 />
            <Checkout />
          </Route>
          <Route path="/show">
            <Header />
            <Header2 />
            <Show />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Header2 />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
