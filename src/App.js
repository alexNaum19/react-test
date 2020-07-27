import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import Home from './pages/Home';
import rootReducer from './store/reducers'
import './App.css';

const store = createStore(rootReducer)

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
