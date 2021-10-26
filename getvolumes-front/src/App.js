
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screen/Home/Home'
import './normalize.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
