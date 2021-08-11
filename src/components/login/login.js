import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={           
                username:'',
                email:'',  
                password:''                

        }
        this.handleInput=this.handleInput.bind(this);
        this.onLogin=this.onLogin.bind(this);
    }

    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }

    onLogin(e){
        e.preventDefault();
        const loginDetail = this.state
        console.log(loginDetail);
        
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onLogin}>
                <h2>Log In</h2>
                  <div className="form-floating mb-3">
                    <input type="text" value={this.state.username} name='username' onChange={this.handleInput} className="form-control" id="floatingInputname" placeholder="name" required/>
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" value={this.state.email} name='email' onChange={this.handleInput} className="form-control" id="floatingInputmail" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" value={this.state.password} name='password' onChange={this.handleInput} className="form-control" id="floatingPassword" placeholder="Password" required/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='d-flex justify-content-start'>
                    <button type="submit" className="btn btn-success mt-2 md-2">Login</button>
                    <Link to='/signin'><h6>Register here</h6></Link>
                </div>
                </form>
            </div>
        )
    }
}
