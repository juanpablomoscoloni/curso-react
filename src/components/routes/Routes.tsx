import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../views/home/Home'
import Details from '../../views/details/Details'
const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/detail/:id' component={Details}/>
        </Switch>
    )
}

export default Routes
