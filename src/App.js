import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/MainNavigation';
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/' exact>
            <Users />
          </Route>

          <Route path='/places/new' exact>
            <NewPlace />
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
