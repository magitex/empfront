<<<<<<< HEAD
import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';
=======
import React, { Component } from 'react';
//import Helper from '../helpers/networks';
//import axios from'axios';
//import  AsyncSelect  from 'react-select/async'
import jsPDF from 'jspdf';
import './invoice.css';

export default class Invoice extends Component {
    
    constructor(props){
        super(props);
        this.state={           
                companyname:'',
                description:'',  
                totalhours:'',  
                hourlyrate:'',
                fixedrate:'', 
                invoicenumber:'',  
                ponumber:'',  
                invoicedate:'',
                podate:'',  
                customers:[],                            
        }
        this.handleInput=this.handleInput.bind(this);
        this.submitInvoice=this.submitInvoice.bind(this);
    }

  
    componentWillMount() {
        fetch('http://localhost:4000/customers')
        .then(data=>{  
            return data.json();      
        }).then(data=> {          
            this.setState({customers : data});      
        })
    }

    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }

    submitInvoice(e){
        e.preventDefault();
        this.setState({           
            companyname:'',
            description:'',  
            totalhours:'',  
            hourlyrate:'',
            fixedrate:'', 
            invoicenumber:'',  
            ponumber:'',  
            invoicedate:'',
            podate:'', 
            //customers:[],                                
    })
    console.log(this.state);
    }

 
    generatePdf(e){
        e.preventDefault();
        console.log('Pdf generated');

        var doc = new jsPDF('p','pt');

        doc.text(250,20,"INVOICE");
        doc.text(20,40,"Company Name :");
        doc.text(150,40,this.state.companyname);
        doc.text(20,60,"Invoice Date :");
        doc.text(150,60,this.state.invoicedate);
        doc.save("Invoice.pdf");
    }
>>>>>>> a314023737bd955cb8d4e4942704ceeeaba6a662


class Invoice extends Component {
    
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/invoicelist">List</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/addinvoice">Add</Link>
                            </li>   
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            

        )
    }
}
export default withRouter(Invoice);