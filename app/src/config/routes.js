import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProfilePage from '../pages/ProfilePage';
import EditSpot from '../components/crudFunctions/EditSpot';
import NewSpot from '../components/crudFunctions/NewSpot';
import EditDestination from '../components/crudFunctions/EditDestination';
import NewDestination from '../components/crudFunctions/NewDestination';
import HowItWorks from '../pages/HowItWorks';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';



const Routes = ({ setToken }) => (
  <Switch>
    <Route exact path='/' component={ LandingPage } />
    <Route path='/signup' component={ Signup } />
    <Route psth='/login' component={() => <Login setToken={setToken} />}  />
    <Route path='/destinations' component={ ProfilePage } />
    <Route path='/edit-spot/:id' component={ EditSpot } />
    <Route path='/add-spot/' component={ NewSpot } />
    <Route path='/edit-destination/:id' component={ EditDestination } />
    <Route path='/new-destination/' component={ NewDestination } />
    <Route path='/how-it-works/' component={ HowItWorks } />
  </Switch>
);

export default Routes;