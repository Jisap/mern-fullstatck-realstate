import React, { useState, useEffect, useContext }from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import UserDetailContext from '../context/userDetailContext'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from '../utils/api'

const Layout = () => {

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();  // Cargamos la data del usuario autenticado
  const { setUserDetails } = useContext(UserDetailContext);               // Obtenemos la fn para establecer el estado del user en la app
  const { mutate } = useMutation({                                        // mutation de  react-query para crear en bd un usuario
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email)
  })

  useEffect(() => {  
    isAuthenticated && mutate()                                
  },[isAuthenticated])

  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout