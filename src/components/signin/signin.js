import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Signin extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Sign In</h2>
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
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"/>
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <div className='d-flex justify-content-start'>
                    <button type="button" className="btn btn-success mt-2 md-2">Sign In</button>
                    <Link to='/'><h6>Back to login</h6></Link>                    
                </div>
            </div>
        )
    }
}
