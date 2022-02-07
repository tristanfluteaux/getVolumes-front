import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screen/Home/Home";
import "./normalize.css";
import Header from "./components/Header/Header";
import InstrumentList from "./screen/InstrumentList/InstrumentList";
import InstrumentDetails from "./screen/InstrumentDetails/InstrumentDetails";
import Login from "./screen/Log/Login";
import SignIn from "./screen/Log/SignIn";
import CartShop from "./components/CartShop/CartShop";
import { PrivateRoute } from "./screen/Log/useSecureRoute";

import { ContextUser } from "./context/Context";
import { useContext } from "react";
import BassCategory from "./screen/InstrumentList/BassCategory";
import GuitCategory from "./screen/InstrumentList/GuitCategory";
import AcousticCategory from "./screen/InstrumentList/AcousticCategory";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
