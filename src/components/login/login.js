import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/useAuth"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import './login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/home")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div className='container'>
                <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                  <div className="form-floating mb-3">
                    <input type="text"  name='username'  className="form-control" id="floatingInputname" placeholder="name" required/>
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" ref={emailRef} required  name='email' className="form-control" id="floatingInputmail" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" ref={passwordRef} required  name='password'  className="form-control" id="floatingPassword" placeholder="Password" required/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='d-flex justify-content-start'>
                    <button type="submit" disabled={loading} className="btn btn-success mt-2 md-2">Login</button>
                    <Link to='/signin'><h6>Register here</h6></Link>
                </div>
                </form>
            </div>
      
    </>
  )
}