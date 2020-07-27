import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import Store from './store'
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
