import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Log In</h2>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputname" placeholder="name"/>
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputmail" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='d-flex justify-content-start'>
                    <button type="button" className="btn btn-success mt-2 md-2">Login</button>
                    <Link to='/signin'><h6>Register here</h6></Link>
                </div>
            </div>
        )
    }
}
