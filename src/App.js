import React from 'react'

import './App.css'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { UserContextProvider } from './context/userContext'

export const App = () => {
  return (
    <UserContextProvider>
      <div id='app'>
        <Header />
        <Login />
      </div>
    </UserContextProvider>
  )
}
