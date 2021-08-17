import React, { Component } from 'react';
import axios from'axios';
import { withRouter } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


class addCustomers extends Component {
    constructor(props){
        super(props);
        this.state={           
                firstname:'',
                lastname:'',  
                address1:'',  
                address2:'',
                city:'', 
                state:'',  
                country:'',   
                zipcode:'',   
                email:'',   
                phone:'',   
                gst:'',               

        }
        this.handleInput=this.handleInput.bind(this);
        this.addCustomer=this.addCustomer.bind(this);
    }

    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }

    selectCountry(val){
        this.setState({country:val})
    }
    selectState(val){
        this.setState({state:val})
    }

    addCustomer(e){
        e.preventDefault();
        const newCustomerDetails = this.state
        
        axios.post('http://localhost:4000/customers/add',newCustomerDetails)
        .then(response => console.log(response.data))
        window.location=('/customerslist')

        
        this.setState({
            firstname:'',
                lastname:'',  
                address1:'',  
                address2:'',
                city:'', 
                state:'',  
                country:'',   
                zipcode:'',   
                email:'',   
                phone:'',   
                gst:'',
        })   
         
    }

    render() {
        const {country,state}=this.state;
        return (
            <div className='container pt-1'>
                <form onSubmit={this.addCustomer}>
                <h3>New Customer</h3>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">First name</label>
                            <input id='firstname' type="text" value={this.state.firstname} name='firstname' onChange={this.handleInput} className="form-control" required/>                            
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Last name</label> 
                            <input id='lastname' type="text" value={this.state.lastname} name='lastname' onChange={this.handleInput} className="form-control" required/>                           
                        </div>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                         <label className="form-label" htmlFor="form6Example3">Address Line 1</label>
                        <input id='address1' type="text" value={this.state.address1} name='address1' onChange={this.handleInput} className="form-control" required/>                       
                    </div>
         
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example4">Address Line 2</label>
                        <input id='address2' type="text" value={this.state.address2} name='address2' onChange={this.handleInput} className="form-control" required/>                       
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example5">Country</label>
                            <CountryDropdown className="form-control"  value={country} onChange={(val)=>this.selectCountry(val)}/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example6">State</label>
                            <RegionDropdown className="form-control" country={country}  value={state} onChange={(val)=>this.selectState(val)}/>                           
                        </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                        <   label className="form-label" htmlFor="form6Example5">City</label>
                            <input id='city' type="text"  value={this.state.city} name='city' onChange={this.handleInput}  className="form-control" required/>                                                   
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example7">Zipcode</label>
                            <input id='zipcode' type="number" value={this.state.zipcode} name='zipcode' onChange={this.handleInput}  className="form-control" required/>                           
                        </div>
                        </div>
                    </div>
            
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example8">Email</label>
                        <input id='email' type="email" value={this.state.email} name='email' onChange={this.handleInput} className="form-control" required/>                       
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example9">Phone</label>
                        <input id='phone' type="number" value={this.state.phone} name='phone' onChange={this.handleInput} className="form-control" required/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example9">GST#</label>  
                        <input id='gst' type="number" value={this.state.gst} name='gst' onChange={this.handleInput} className="form-control" required/>                        
                    </div>
                                                
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                </form>                
            </div>
        )
    }
}

export default withRouter(addCustomers);
