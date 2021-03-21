import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProfilePage from '../pages/ProfilePage';
import EditSpot from '../components/crudFunctions/EditSpot';
import NewSpot from '../components/crudFunctions/NewSpot';
import EditDestination from '../components/crudFunctions/EditDestination';
import NewDestination from '../components/crudFunctions/NewDestination';
import HowItWorks from '../pages/HowItWorks';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';

const token = localStorage.getItem('token');

const Routes = ({ token, setToken }) => (
  <Switch>
    <Route exact path='/' component={ LandingPage } />
    <Route path='/signup' component={ Signup } />
    <Route path='/login' component={() => <Login setToken={setToken} />}  />
    {token && <Route path='/destinations' component={ ProfilePage } />}
    <Route path='/edit-spot/:id' component={ EditSpot } />
    <Route path='/add-spot/' component={ NewSpot } />
    <Route path='/edit-destination/:id' component={ EditDestination } />
    <Route path='/new-destination/' component={ NewDestination } />
    <Route path='/how-it-works/' component={ HowItWorks } />
    <Route path='*' component={() => <Redirect to='login' />} />
  </Switch>
);

export default Routes;