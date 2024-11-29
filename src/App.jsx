import React, { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap border border-black content-between bg-purple-800 rounded-lg">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App












{
  /* <p>Sample <strong>article</strong></p> 
 test article

673c12050015125e3332 UserID
673c133c000580e18c71 imageID

*/}