import React, { useContext, useState, useEffect } from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
firebase.initializeApp({
    apiKey: "AIzaSyCgcum0sX_Gk4v6ABCOuX8ThLLR3fac8kU",

    authDomain: "employeemanagement-183ce.firebaseapp.com",
  
    projectId: "employeemanagement-183ce",
  
    storageBucket: "employeemanagement-183ce.appspot.com",
    databaseURL: "https://employeemanagement-183ce-default-rtdb.firebaseio.com",
    messagingSenderId: "669178259225",
  
    appId: "1:669178259225:web:b386c05ba3349077f40788",
  
    measurementId: "G-W1K3W99LLS"
})

const AuthContext = React.createContext()

export const  useAuth= () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [user, setUser] = useState(null)
  const [isuthenticating, setisuthenticating] = useState(true)
  const [loading, setLoading] = useState(true)
  function signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return firebase.auth().signOut()
  }

  function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.auth().updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.auth().updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}