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


    render() {
        return (
            <div className='container'>        
                <form >
                <h3>New Invoice</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="companyname">Company name</label>                    
                <select name="companyname" type="text" id="companyname"  onChange={this.handleInput} value={this.state.companyname} className="form-select" aria-label="Default select example">
                    {this.state.customers.map(customer => (
                    <option key={customer.firstname} name='companyname' >
                        {customer.firstname}
                    </option>
                    ))}
                </select>
                </div>
                
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea className="form-control" id="description"  value={this.state.description} name='description' onChange={this.handleInput}  rows="3"></textarea>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="totalhours">Total Hours</label> 
                        <input id='totalhours' type="number" value={this.state.totalhours} name='totalhours' onChange={this.handleInput} className="form-control" required/>                           
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="hourlyrate">Hourly Rate</label>
                        <input id='hourlyrate' type="number" value={this.state.hourlyrate} name='hourlyrate' onChange={this.handleInput} className="form-control" required/>                            
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="fixedrate">Fixed Rate</label> 
                        <input id='fixedrate' type="number" value={this.state.fixedrate} name='fixedrate' onChange={this.handleInput} className="form-control" required/>                           
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="invoicenumber">Invoice Number</label>
                        <input id='invoicenumber' type="number" value={this.state.invoicenumber} name='invoicenumber' onChange={this.handleInput} className="form-control" required/>                            
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="ponumber">PO Number</label> 
                        <input id='ponumber' type="number" value={this.state.ponumber} name='ponumber' onChange={this.handleInput} className="form-control" required/>                           
                    </div>
                    </div>
                </div>  
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="invoicedate">Invoice Date</label>
                        <input id='invoicedate' type="text" value={this.state.invoicedate} name='invoicedate' onChange={this.handleInput} className="form-control" required/>                            
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="podate">PO Date</label> 
                        <input id='podate' type="text" value={this.state.podate} name='podate' onChange={this.handleInput} className="form-control" required/>                           
                    </div>
                    </div>
                </div>                                                              
                    <button type="button" onClick={(event) => { this.submitInvoice(event);this.generatePdf(event)}} className="btn btn-primary btn-block mb-4">Submit</button>              
                </form>                
            </div>

        )
    }
}
