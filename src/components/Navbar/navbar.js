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
            <Link to="/customerslist">Customers</Link>&nbsp;         
            <Link to="/employeelist">Employees</Link>&nbsp;
            <Link to="/timesheet">Time Sheet</Link>&nbsp;
            <Link to="/projectlist">Projects</Link>&nbsp;                    
        </div>
        <Switch>
          <Route path="/" exact> <Login /></Route>
          <Route path="/signin"> <Signin /></Route>
          <Route path="/home"> <Homepage /></Route>
          <Route path="/customerslist"><Customers /></Route>
          <Route path="/employeelist"><Employees /></Route>        
          <Route path="/timesheet"><Timesheet /> </Route>
          <Route path="/projectlist"><Projects /></Route>        
        </Switch>
      </div>
    </Router>

  );
}
}


