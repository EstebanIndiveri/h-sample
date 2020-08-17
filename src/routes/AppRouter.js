import React, { useContext } from 'react';
import{
    BrowserRouter as Router,
    Switch,
    // Route,
    // Link
}from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './publicRoute';

const AppRouter = () => {
  const {user} = useContext(AuthContext);

    return ( 
        <Router>
      <div>
        {/* <Navbar/> */}
        <Switch>
            <PublicRoute exact path='/login' component={LoginScreen} isAuthenticated={user.logged}/>

            <PrivateRoute path='/' component={DashboardRoutes} isAuthenticated={user.logged}/>
        </Switch>
      </div>
    </Router>
     );
}
 
export default AppRouter;