import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/pages/home';
import Cart from './components/pages/cart';
import Privacy from './components/pages/privacy-policy';
import Sidebar from './components/part/sidebar';
import Info from './components/pages/info';
import Login from './components/pages/login';


function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
           
            <Route exact path="/home" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route exact path="/sidebar" component={Sidebar} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/login" component={Login} />

      </div>
    </Router>
  );
}

export default App;
