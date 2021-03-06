import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./screen/Log/useSecureRoute";
import { ContextUser } from "./context/Context";
import { useContext } from "react";
import CartShop from "./components/CartShop/CartShop";
import Checkout from "./screen/Checkout/Checkout";
import Home from "./screen/Home/Home";
import Header from "./components/Header/Header";
import InstrumentList from "./screen/InstrumentList/InstrumentList";
import InstrumentDetails from "./screen/InstrumentDetails/InstrumentDetails";
import Login from "./screen/Log/Login";
import SignIn from "./screen/Log/SignIn";

import AcousticCategory from "./screen/InstrumentList/AcousticCategory";
import BassCategory from "./screen/InstrumentList/BassCategory";
import GuitCategory from "./screen/InstrumentList/GuitCategory";

import "./normalize.css";
import UserInfo from "./screen/Log/userInfo/UserInfo";


function App() {
  const { accessToken } = useContext(ContextUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <InstrumentList />
          </Route>
          <Route exact path="/product/:id">
            <InstrumentDetails />
          </Route>
          <Route exact path="/filter/bass">
            <BassCategory />
          </Route>
          <Route exact path="/filter/guitar">
            <GuitCategory />
          </Route>
          <Route exact path="/filter/accoustic">
            <AcousticCategory />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <SignIn />
          </Route>
          <PrivateRoute exact path="/cart">
            <CartShop />
          </PrivateRoute>
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute exact path="/info">
            <UserInfo />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
