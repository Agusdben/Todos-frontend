import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { UserContextProvider } from './context/userContext'

import { AddTodo } from './components/AddTodo'
import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Login } from './pages/Login'

import './App.css'

export const App = () => {
  return (
    <UserContextProvider>

      <Router>
        <div id='app'>
          <Header />
          <AddTodo />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<></>} />
            <Route
              path='*'
              element={<Navigate to='/' replace />}
            />
          </Routes>

        </div>
      </Router>

    </UserContextProvider>
  )
}
