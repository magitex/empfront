import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import Homepage from '../homepage/homepage';
import Customers from '../customers/customers';
import Employees from '../employees/employees';
import Projects from '../projects/projects';
import Timesheet from '../timesheet/timesheet';
import Login from '../login/login';
import Signin from '../signin/signin';
import { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component {
  render(){
  return (

    <Router>
      <div>        
        <div className='navbars'>
            <Link to="/">Login</Link>&nbsp;
            <Link to="/home">Home</Link> &nbsp;         
            <Link to="/customers">Customers</Link>&nbsp;         
            <Link to="/employees">Employees</Link>&nbsp;
            <Link to="/timesheet">Time Sheet</Link>&nbsp;
            <Link to="/projects">Projects</Link>&nbsp;                    
        </div>
        <Switch>
          <Route path="/" exact> <Login /></Route>
          <Route path="/signin"> <Signin /></Route>
          <Route path="/home"> <Homepage /></Route>
          <Route path="/customers"><Customers /></Route>
          <Route path="/employees"><Employees /></Route>        
          <Route path="/timesheet"><Timesheet /> </Route>
          <Route path="/projects"><Projects /></Route>        
        </Switch>
      </div>
    </Router>

  );
}
}


