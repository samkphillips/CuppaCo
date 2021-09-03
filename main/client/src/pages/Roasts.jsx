import React from 'react'
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom'
import AllRoasts from './subpages/AllRoasts'
import AddRoast from './subpages/AddRoast'
import RoastDetail from './subpages/RoastDetail'

const Roasts = () => {
  let { path, url } = useRouteMatch()

  return (
    <div className='roasts-page'>
      <div className='roasts-sidebar'>
        <NavLink to={`${url}`} className="navlinks">Roasts</NavLink>
        <NavLink to={`${url}/add`} className="navlinks">Add Roast</NavLink>
      </div>
      
      <Switch>
        <Route exact path={path} component={(props) => <AllRoasts {...props} />} />
        <Route path={`${path}/add`} component={AddRoast} />
        <Route path={`${path}/details/:id`} component={(props) => <RoastDetail {...props} />} />
      </Switch>
    </div>
  )
}

export default Roasts