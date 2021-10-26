
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screen/Home/Home'
import './normalize.css';
import Header from './components/Header/Header';
import InstrumentList from './screen/InstrumentList/InstrumentList';
import InstrumentDetails from './screen/InstrumentDetails/InstrumentDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/product'>
            <InstrumentList />
          </Route>
          <Route exact path='/product/:id'>
            <InstrumentDetails />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
