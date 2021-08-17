import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom';
import AddCustomers from "./addcustomers";
import Editcustomer from './editcustomer';
import Customerslist from './customerslist';

class Customers extends Component {
    render() {
        return (
            <Router>
            <div>         
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/customerslist">List</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/addcustomer">Add</Link>
                            </li>   
                        </ul>
                        </div>
                    </div>
                </nav>                       
            </div>
            <Switch> 
                <Route path="/customerslist"><Customerslist/></Route>                
                <Route path="/addcustomer"><AddCustomers /></Route>        
                <Route path="/editcustomer/:id"><Editcustomer/></Route>
            </Switch>
        
            </Router>
        )
    }
}

export default withRouter(Customers);
