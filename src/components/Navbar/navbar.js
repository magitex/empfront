import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import Homepage from '../homepage/homepage';
import Addemployees from '../employees/addemployees';
import Editemployees from '../employees/editemployees';
import Employeeslist from '../employees/employeelist';
import AddCustomers from '../customers/addcustomers';
import Editcustomer from '../customers/editcustomer';
import Customerslist from '../customers/customerslist'; 
import Projects from '../projects/projects';
import Timesheet from '../timesheet/timesheet';
import Login from '../login/login';
import Signin from '../signin/signin';
import { Component } from 'react';
import './navbar.css'
<<<<<<< HEAD
import Invoicelist from '../invoices/invoicelist';
import Addinvoice from '../invoices/addinvoice';
=======
import Invoice from '../invoices/invoice';
import InvoicePdf from '../invoices/invoicePdf';

>>>>>>> a314023737bd955cb8d4e4942704ceeeaba6a662
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
<<<<<<< HEAD
            <Link to="/invoicelist">Invoice</Link>&nbsp;                    
=======
            <Link to="/invoice">Invoice</Link>&nbsp;  
            <Link to="/invoicepdf">InvoicePdf</Link>&nbsp;                    
>>>>>>> a314023737bd955cb8d4e4942704ceeeaba6a662
        </div>
        <Switch>
          <Route path="/" exact> <Login /></Route>
          <Route path="/signin"> <Signin /></Route>
          <Route path="/home"> <Homepage /></Route>          
          <Route path="/addcustomer"><AddCustomers /></Route> 
          <Route path="/editcustomer/:id"><Editcustomer/></Route>
          <Route path="/customerslist"><Customerslist/></Route>                       
          <Route path="/timesheet"><Timesheet /> </Route>
          <Route path="/projectlist"><Projects /></Route> 
          <Route path="/employeelist"><Employeeslist /></Route>       
          <Route path="/addemployees"><Addemployees /></Route>
          <Route path="/editemployees/:id"><Editemployees/></Route>  
<<<<<<< HEAD
          <Route path="/invoicelist"><Invoicelist/></Route> 
          <Route path="/addinvoice"><Addinvoice/></Route>       

=======
          <Route path="/invoice"><Invoice/></Route>       
          <Route path="/invoicepdf"><InvoicePdf/></Route>       
>>>>>>> a314023737bd955cb8d4e4942704ceeeaba6a662
        </Switch>
      </div>
    </Router>

  );
}
}


