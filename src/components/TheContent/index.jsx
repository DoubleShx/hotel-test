import React, { Suspense } from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

// routes config
import routes from '../../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props) => {
  return (
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element/>}        
                  />
              )
            })}
          </Routes>
        </Suspense>
  )
}

export default React.memo(TheContent)
