import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import './App.css';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
