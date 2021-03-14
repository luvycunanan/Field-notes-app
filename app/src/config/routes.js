import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProfilePage from '../pages/ProfilePage';
import EditSpot from '../components/crudFunctions/EditSpot';
import NewSpot from '../components/crudFunctions/NewSpot';
import EditDestination from '../components/crudFunctions/EditDestination';
import NewDestination from '../components/crudFunctions/NewDestination';
import HowItWorks from '../pages/HowItWorks';



export default (
  <Switch>
    <Route exact path='/' component={ LandingPage } />
    <Route path='/destinations' component={ ProfilePage } />
    <Route path='/edit-spot/:id' component={ EditSpot } />
    <Route path='/add-spot/' component={ NewSpot } />
    <Route path='/edit-destination/:id' component={ EditDestination } />
    <Route path='/new-destination/' component={ NewDestination } />
    <Route path='/how-it-works/' component={ HowItWorks } />

  </Switch>
);