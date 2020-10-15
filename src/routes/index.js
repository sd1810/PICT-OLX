import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/Sign In/Signin';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Seller from '../pages/Seller/Seller';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/seller" component={Seller} />
            
            {/* Redirect user to the Signin page if the route does not exist and user is not authenticated */}
            <Route component={Signin} />
        </Switch>
    )
}