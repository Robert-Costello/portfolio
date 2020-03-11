import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Resume from './Resume'

const Routes = () => {
  return (
    <Switch>
      <Route path="/resume" component={Resume} />
    </Switch>
  )
}

export default Routes