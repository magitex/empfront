import { BrowserRouter as Router,Link,Switch,Route, useHistory } from 'react-router-dom';
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
import Invoicelist from '../invoices/invoicelist';
import Offerletterlistlist from '../offerletter/offerletterlist';

import Addinvoice from '../invoices/addinvoice';
import Invoice from '../invoices/invoice';
import Addinvoiceold from '../invoices/addinvoiceold';
import { useAuth } from "../../contexts/useAuth"
import PrivateRoute from "../../PrivateRoute";


export default function Navbar()  {
  const { currentUser,logout } = useAuth()
  const history = useHistory()

  async function handlelogout() {
   

    try {     
      await logout()
      history.push("/")
    } catch {
      //setError("Failed to log out")
    }

   
  }

 
  return (

    <Router>
      <div>        
        <div className='navbars'>
          {!currentUser && (
            <>
         
          </>
          )
          }
           {currentUser && (
            <>
          <Link to="/home">Dashboard</Link> &nbsp;         
            <Link to="/customerslist">Customers</Link>&nbsp;         
            <Link to="/employeelist">Employees</Link>&nbsp;
            <Link to="/timesheet">Time Sheet</Link>&nbsp;
            <Link to="/projectlist">Projects</Link>&nbsp; 
            <Link to="/invoicelist">Invoice</Link>&nbsp; 
            <Link to="/offerletterlist">Offerletter</Link>&nbsp;  
            <a  onClick={handlelogout}>Logout</a>&nbsp;
 
          </>
          )
          }
           
              
                               
                         
        </div>
        <Switch>
         <PrivateRoute  exact  path="/home" component={Homepage} />
          <Route path="/" exact> <Login /></Route>
          <Route path="/signin"> <Signin /></Route>
          <PrivateRoute exact  path="/addcustomer"  component={AddCustomers} />
          <PrivateRoute exact path="/editcustomer/:id" component={Editcustomer} />
          <PrivateRoute exact path="/customerslist" component={Customerslist}  />                       
          <PrivateRoute exact path="/timesheet" component={Timesheet} />
          <PrivateRoute exact path="/projectlist" component={Projects} />
          <PrivateRoute exact path="/employeelist" component={Employeeslist} />       
          <PrivateRoute exact path="/addemployees" component={Addemployees} />
          <PrivateRoute exact path="/editemployees/:id" component={Editemployees} /> 
          <PrivateRoute exact path="/invoicelist" component={Invoicelist} /> 
          <PrivateRoute exact path="/offerletterlist" component={Offerletterlistlist} /> 

          <PrivateRoute exact  path="/addinvoice" component={Addinvoice} />  
          <PrivateRoute exact path="/addinvoiceold" component={Addinvoiceold} /> 
          

          <Route path="/invoice"><Invoice/></Route>       
          
        </Switch>
      </div>
    </Router>

  );

}


