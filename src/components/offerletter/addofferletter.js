import React from "react";
import TaskList from "./invoiceDetails";
import Invoice from '../invoices/invoice';
import axios from 'axios';

//import axios from 'axios';
class Addofferletter extends React.Component {
    state = {
       
        employeename:"",
        joiningDate: "",
        salary:"", 
        emppdtls:{},
            
    }
    componentWillMount() {
        fetch(process.env.REACT_APP_BASE_URL+'employees')
        .then(data=>{  
            return data.json();      
        }).then(data=> {          
            this.setState({customers : data});      
        })
    }
    handleChange = (e) => {
       
         if(e.target.name==='employeename')
        {
            axios.get(process.env.REACT_APP_BASE_URL+'employees/'+e.target.value) 
            .then(res=>{
                this.setState({emppdtls : res.data});
                this.setState({employeename : res.data._id});

                    console.log('cusrt',res.data) ;  
                    console.log('cusrt1',this.state.compdtls) ;  

                          
                });   
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            invoiceDetails: [...prevState.invoiceDetails, {index: Math.random(), description: "", totalhours: "", hourlyrate: "", totalamount: "" }],
        }));
    }
    deteteRow = (index) => {
        this.setState({
            invoiceDetails: this.state.invoiceDetails.filter((s, sindex) => index !== sindex),
        });        
    }
    handleSubmit = (e) => {
        e.preventDefault();        
         let newinvDetails = this.state
         axios.post(process.env.REACT_APP_BASE_URL+'offerletter/add',newinvDetails)
         .then(
             response => {
                 console.log(response.data._id);
                 newinvDetails.id = response.data._id;
                 console.log(newinvDetails);
 
                 axios.post(process.env.REACT_APP_BASE_URL+'offerpdf/generateofferletterReportWeb',newinvDetails)
                 .then(response => console.log(response.data));
             
             },
             error => {
              console.error(error);
             }
            );
              
    }
    clickOnDelete(record) {
        this.setState({
            invoiceDetails: this.state.invoiceDetails.filter(r => r !== record)
        });
    }
    render() {
        let { invoiceDetails } = this.state
        return (
            <div>
                 <Invoice/>
            <div className="content p-4">            
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center"><h3>Add Invoice</h3></div>
                                <div className="card-body">
                                    <div className="row p-3">
                                    <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="form-label">Company name</label>                    
                                                <select name="companyname" id="companyname"  onChange={this.handleChange} className="form-select" aria-label="Default select example">
                                                    {this.state.customers.map(customer => (
                                                    <option key={customer._id} value={customer._id} name='companyname' >
                                                        {customer.firstname} {customer.lastname}
                                                    </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="form-label">Invoice Date</label>
                                                <input type="date"  name="invoicedate" id="invoicedate" className="form-control" placeholder="Enter Date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="form-label">Po Date</label>
                                                <input type="date"  name="podate" id="podate" className="form-control" placeholder="Enter Date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-sm-6">
                                        <label className="form-label">Invoice Number</label>
                                        <input type="text"  name="invoicenumber" id="invoicenumber" className="form-control"  />
                                        </div>
                                        <div className="col-sm-6">
                                        <label className="form-label">Po Number</label>
                                        <input type="text"  name="ponumber" id="ponumber" className="form-control"  />
                                        </div>              
                                    </div>
                                    <table className="table p-3">
                                        <thead>
                                            <tr>
                                                <th className="form-label" >Description</th>
                                                <th className="form-label" >Total Hours</th>
                                                <th>Hourly Rate</th>
                                                <th>Total Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} invoiceDetails={invoiceDetails} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="bi bi-plus-circle"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="p-4">
                                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default Addofferletter