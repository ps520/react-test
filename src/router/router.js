import React from 'react';
import RouterMap from '../router/routerMap'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
  const Routers=()=>(
      <Router>
          <Switch>
              {
                  RouterMap.map((v,i)=>(
                    <Route key={i} path={v.path} exact={v.exact} component={v.component} />
                  ))
              }
          </Switch>
      </Router>
  )

  export default Routers;