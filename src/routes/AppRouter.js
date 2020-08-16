import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom'
import { Navbar } from '../components/ui/NavBar';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';

const AppRouter = () => {
    return ( 
        <Router>
      <div>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={LoginScreen}/>
            <Route exact path='/' component={MarvelScreen}/>
        </Switch>
      </div>
    </Router>
     );
}
 
export default AppRouter;