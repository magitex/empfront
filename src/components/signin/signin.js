import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from'axios'


export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state={           
                username:'',
                email:'',  
                password:'',
              
        }
        this.handleInput=this.handleInput.bind(this);
        this.onSignin=this.onSignin.bind(this);
    }

    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }

    onSignin(e){
        e.preventDefault();
        const signinDetail = this.state
    

        axios.post(process.env.REACT_APP_BASE_URL+'api/signin',signinDetail)
        .then(response => console.log(response.data))

        window.location ='/'
              
    }

    render() {
        return (
            <form className='container' onSubmit={this.onSignin}>
                <h2>Sign In</h2>
                  <div className="form-floating mb-3">
                    <input type="text" value={this.state.username} name='username'  className="form-control" id="floatingInputname" onChange={this.handleInput} placeholder="name" required/>
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" name='email' className="form-control" id="floatingInputmail" onChange={this.handleInput} placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" name='password' className="form-control" id="floatingPassword" onChange={this.handleInput} placeholder="Password" required/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>                      
                <div className='d-flex justify-content-start'>
                    <button type="submit" className="btn btn-success mt-2 md-2">Sign In</button>
                    <Link to='/'><h6>Back to login</h6></Link>                    
                </div>
            </form>
        )
    }
}
