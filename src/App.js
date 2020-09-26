import React from 'react';
import Router from './Router'
import Navigation from './components/Nav'
import Genres from './components/Genres'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
      <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
