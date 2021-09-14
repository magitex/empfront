import React from "react";
import TaskList from "./invoiceDetails";
import Invoice from '../invoices/invoice';
//import axios from 'axios';
class Form extends React.Component {
    state = {
        invoiceDetails: [{index: Math.random(), description: "", totalhours: "", hourlyrate: "", totalamount: "" }],
        companyname:"",
        invoicedate: "",
        podate:"", 
        invoicenumber:"",
        ponumber:"",
        customers:[],      
    }

    componentWillMount() {
        fetch('http://localhost:4000/customers')
        .then(data=>{  
            return data.json();      
        }).then(data=> {          
            this.setState({customers : data});      
        })
    }
  
    handleChange = (e) => {
        if (["description", "totalhours", "hourlyrate", "totalamount"].includes(e.target.name)) {
            let invoiceDetails = [...this.state.invoiceDetails]
            invoiceDetails[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
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
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // if(this.state.date==='' || this.state.description==='')
        // {
        //     NotificationManager.warning("Please Fill up form-label Field . Please check Task and Date Field");
        //     return false;
        // }
        // for(var i=0;i<this.state.taskList.length;i++)
        // {
        //         if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
        //         {
        //             NotificationManager.warning("Please Fill up form-label Field.Please Check Project name And Task Field");
        //             return false;
        //         }
        // }
         let data = { formData: this.state}
         console.log(data);
        // axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
        // axios.post("http://localhost:9000/api/task", data).then(res => {
        //     if(res.data.success) NotificationManager.success(res.data.msg);
        // }).catch(error => {
        //     if(error.response.status && error.response.status===400)
        //     NotificationManager.error("Bad Request");
        //     else NotificationManager.error("Something Went Wrong");
        //     this.setState({ errors: error })
        // });
    }
    clickOnDelete(record) {
        this.setState({
            invoiceDetails: this.state.invoiceDetails.filter(r => r !== record)
        });
    }
    render() {
        let { invoiceDetails } = this.state//let { notes, date, description, taskList } = this.state
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
                                                    <option key={customer.firstname} value={customer.firstname} name='companyname' >
                                                        {customer.firstname}
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
export default Form