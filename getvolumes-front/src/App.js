
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screen/Home/Home'
import './normalize.css';
import Header from './components/Header/Header';
import InstrumentList from './screen/InstrumentList/InstrumentList';
import InstrumentDetails from './screen/InstrumentDetails/InstrumentDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './screen/Log/Login';
import SignIn from './screen/Log/SignIn';

function App() {
  const [instruments, setInstruments] = useState()

  useEffect(() => {
      const getGuitars = async () => {
          const results = await axios.get('http://localhost:4000/guitars')
          setInstruments(results.data)
      }
      getGuitars()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/product'>
            <InstrumentList 
            instruments={instruments}
            />
          </Route>
          <Route exact path='/product/:id'>
            <InstrumentDetails/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <SignIn/>
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
