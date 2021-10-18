import React, { Component } from 'react';
//import Helper from '../helpers/networks';
//import axios from'axios';
//import  AsyncSelect  from 'react-select/async'
import jsPDF from 'jspdf';
import './invoice.css';
import axios from 'axios';
import Invoice from '../invoices/invoice';

export default class Addinvoiceold extends Component {
    
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
                invoiceurl:'',
                podate:'',  
                customers:[],                            
        }
        this.handleInput=this.handleInput.bind(this);
        this.submitInvoice=this.submitInvoice.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

  
    componentWillMount() {
        fetch('http://localhost:4000/customers')
        .then(data=>{  
            return data.json();      
        }).then(data=> {          
            this.setState({customers : data});      
        })
    }

    handleChange(e) {
        this.setState({ companyname: e.target.value });
        console.log(e.target.value);
      }
    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }
   
    submitInvoice(e){
        e.preventDefault();
        let newinvDetails={};
         newinvDetails.companyname = this.state.companyname;
         newinvDetails.description = this.state.description;
         newinvDetails.totalhours = this.state.totalhours;
         newinvDetails.hourlyrate = this.state.hourlyrate;
         newinvDetails.fixedrate= this.state.fixedrate;
         newinvDetails.invoicenumber= this.state.invoicenumber;
         newinvDetails.ponumber= this.state.ponumber;
         newinvDetails.invoicedate= this.state.invoicedate;
         newinvDetails.podate = this.state.podate;
         newinvDetails.invoiceurl = this.state.invoiceurl;
         
        console.log(newinvDetails);
        axios.post('http://localhost:4000/invoice/add',newinvDetails)
        .then(
            response => {
                console.log(response.data._id);
                newinvDetails.id = response.data._id;
                console.log(newinvDetails);

                axios.post('http://localhost:4000/pdf/generateReportWeb',newinvDetails)
                .then(response => console.log(response.data));
            
            },
            error => {
             console.error(error);
            }
           );
        
       
        
       //window.location=('/invoicelist')

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
   
    }

 
    generatePdf(e){
        e.preventDefault();
        console.log('Pdf generated');

        var doc = new jsPDF('p','pt');
       
        doc.line(20, 20, 20, 20);
        doc.text('Invoice', 40, 20, 'center');
        doc.text(20,40,this.state.companyname);
        doc.text(20,60,this.state.invoicedate);
        doc.save("Invoice.pdf");
    }


    render() {
        return (
            <div>
            <Invoice />
            <div className='container'>        
                <form >
                <h3>New Invoice</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="companyname">Company name</label>                    
                <select name="companyname" id="companyname"  onChange={this.handleChange} className="form-select" aria-label="Default select example">
                    {this.state.customers.map(customer => (
                    <option key={customer.firstname} value={customer.firstname} name='companyname' >
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
                    <button type="button" onClick={(event) => { this.submitInvoice(event);}} className="btn btn-primary btn-block mb-4">Submit</button>              
                </form>                
            </div>
</div>
        )
    }
}
