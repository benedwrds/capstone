import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import cookie from 'cookie'
import Navigation from './components/Nav'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Search from './components/Search'
import Genres from './components/Genres'

const Router = () => {
  return (
      <Switch>
          {/* <Route exact path="/" component={Navigation} /> */}
          <Route exact path="/" component={Genres}/>  
          <Route path="/login" component={Login} />
          <Route path="/createAccount" component={CreateAccount}/> 
          <Route path="/search" component={Search}/>

           {/*<ProtectedRoute path="/add" component={Add} />  */}
      </Switch>
  );
};

export default Router;