import React from 'react'
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom'
import RoastNav from '../components/RoastNav'
import AllRoasts from './subpages/AllRoasts'

const Roasts = () => {
  let { path, url } = useRouteMatch()

  return (
    <div className='roasts-page'>
      <div className='roasts-sidebar'>
        <NavLink to={`${url}`} className="navlinks">Roasts</NavLink>
        <NavLink to={`${url}/add`} className="navlinks">Add Roast</NavLink>
        <NavLink to={`${url}/search`} className="navlinks">Search</NavLink>
      </div>
      
      <Switch>
        <Route exact path={path} component={AllRoasts} />
        <Route path={`${path}/add`}>
          <h1>Add Roast</h1>
        </Route>
        <Route path={`${path}/search`}>
          <h1>Search Roast</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default Roasts