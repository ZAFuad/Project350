import React  from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Home from './components/pages/Home';
import MarketPlace from './components/pages/MarketPlace';
import SignUp from './components/pages/SignUp';
import Create from './components/pages/Create';
import Detail from './components/pages/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route path="/asset/:id" exact component={Detail} />
          <Route path='/market-place' exact component={MarketPlace} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/create' exact component={Create} />
        </Switch>
      </div>
    </>
  );
}

export default App;
