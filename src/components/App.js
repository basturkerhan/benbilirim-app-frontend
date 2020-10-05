import React, { useContext } from 'react'
import '../style/App.sass'
import Footer from "./Footer"
import { UserContext } from '../context/UserContext'
import Router from "./Router"
import AuthRouter from "./AuthRouter"
import AppLoading from './AppLoading'

function App() {
  const { user, isLoad } = useContext(UserContext)

  return (
    <div>
      { isLoad ? (user ? <Router user={user} /> : <AuthRouter />) : <AppLoading />}
      <Footer />
    </div>
  )
}

export default App