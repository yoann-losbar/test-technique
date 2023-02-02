import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import React from 'react'

export const PrivateOutlet: React.FC = () => {
  const auth = useAuth()
  const location = useLocation()
  return (auth.user != null)
    ? (
        <Outlet/>
      )
    : (
        <Navigate to="/login" state={{ from: location }}/>
      )
}
