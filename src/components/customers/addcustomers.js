import React, { Component } from 'react'


export default class Addcustomers extends Component {
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
                GHT:'',               

        }
        this.handleInput=this.handleInput.bind(this);
        this.addCustomer=this.addCustomer.bind(this);
    }

    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }

    addCustomer(e){
        e.preventDefault();
        const newCustomerDetails = this.state
        console.log(newCustomerDetails);
        document.getElementById('firstname').value=null;
        document.getElementById('lastname').value=null;
        document.getElementById('address1').value=null;
        document.getElementById('address2').value=null;
        document.getElementById('city').value=null;
        document.getElementById('state').value=null;
        document.getElementById('country').value=null;
        document.getElementById('zipcode').value=null;
        document.getElementById('phone').value=null;
        document.getElementById('email').value=null;
        document.getElementById('gst').value=null;         
    }

    render() {
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
                            <label className="form-label" htmlFor="form6Example5">City</label>      
                            <input id='city' type="text"  value={this.state.city} name='city' onChange={this.handleInput}  className="form-control" required/>                           
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example6">State</label>
                            <input id='state' type="text" value={this.state.state} name='state' onChange={this.handleInput} className="form-control" required/>                         
                        </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example6">Country</label>
                            <input id='country' type="text" value={this.state.county} name='country' onChange={this.handleInput} className="form-control" required/>                         
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
                        <input id='gst' type="number" value={this.state.GHT} name='GHT' onChange={this.handleInput} className="form-control" required/>                        
                    </div>
                                                
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                </form>                
            </div>
        )
    }
}
