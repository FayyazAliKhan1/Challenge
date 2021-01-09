import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import MyContextProvider from './MyContext';
import Photos from './pages/Photos';
import Cart from './pages/Cart';
function App() {
  return (
    <MyContextProvider>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Photos} />
          <section className='container'>
            <Switch>
              <Route exact path='/cart' component={Cart} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </MyContextProvider>
  );
}

export default App;
