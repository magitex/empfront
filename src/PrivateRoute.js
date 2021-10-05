import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./contexts/useAuth"

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useAuth()
console.log('user',currentUser);
  return (
    <Route
    {...rest}
    render={routeProps =>
      !!currentUser ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={"/"} />
      )
    }
  />
  )
}