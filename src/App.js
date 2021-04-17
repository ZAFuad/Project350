
import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom' ;
import Home from './components/pages/Home';
import MarketPlace from './components/pages/MarketPlace';
import SignUp from './components/pages/SignUp';
import Create from './components/pages/Create';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/market-place' exact component={MarketPlace} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/create' exact component={Create} />
        </Switch>
      </div>
    </>
  );
}

export default App;
