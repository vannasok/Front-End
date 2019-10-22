import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
// import FriendForm from './FriendForm';

const AppRouter = () => {
   return (
      <>
         <Switch>
            {/* <Route path='/Home' component={HomePage} /> */}
            <PrivateRoute path='/' exact component={HomePage} />
            <Route path='/login' component={LoginPage} />
            {/* <PrivateRoute path='/' exact component={HomePage} />
            <PrivateRoute path='/add-friend' component={FriendForm} />
            <PrivateRoute path='/update-friend' component={FriendForm} /> */}
            <Route path='/signup' component={SignupForm} />
         </Switch>
      </>
   );
};

export default AppRouter;
