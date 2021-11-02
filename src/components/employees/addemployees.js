import React, { Component } from 'react';
import axios from'axios';
import {withRouter } from 'react-router-dom';
import Employees from '../employees/employees';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Addemployees extends Component {
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
                imageurl:'',
                pan:'',
                aadhar:'',
                selectedFile:'',  
                gst:'',               
        }
        this.handleInput=this.handleInput.bind(this);
        this.addEmployee=this.addEmployee.bind(this);
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
    fileChangedHandler = event => {
        console.log(event.target.files[0])
        this.setState({ selectedFile: event.target.files[0] })
    }

    addEmployee(e){
    e.preventDefault();
        const formData = new FormData();
        formData.append('myImag',this.state.selectedFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
    };
           
            axios.post( `${process.env.REACT_APP_BASE_URL}profile/upload`, formData,config).then(
                response => {
                 const imageurl = response.data;                 
                 console.log( 'imageurl', imageurl);
               
                 this.setState( {
                imageurl: imageurl 
                 })
                });
 
                 
    
            const newEmployeeDetails = this.state;
            console.log(newEmployeeDetails);
   
        axios.post(`${process.env.REACT_APP_BASE_URL}employees/add`,newEmployeeDetails)
        .then(response => console.log(response.data))        
    
        
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
                aadhar:'', 
                pan:'', 
                imageurl:'',
                selectedFile:'',    
                gst:'',
        })               
    }
    
    render() {
        const {country,state}=this.state;
        return (
            <div>
        <Employees />
            <div className='container pt-1'>
                
                <form onSubmit={this.addEmployee}>
                <h3>New Employee</h3>
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
                        <label className="form-label" htmlFor="form6Example9">Profile Image</label>
                        <input type="file" onChange={this.fileChangedHandler} id="img" name="img" accept="image/*"/>                      
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
                        <label className="form-label" htmlFor="form6Example5">State</label>
                        <RegionDropdown className="form-control" country={country}  value={state} onChange={(val)=>this.selectState(val)}/>                           
                        </div>
                        </div>
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
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Exampleaadhar">Aandhar Number</label>
                            <input id='aadhar' type="text" value={this.state.aadhar} name='aadhar' onChange={this.handleInput} className="form-control" required/>                                                        
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Examplepan">Pan Number</label>
                            <input id='pan' type="text" value={this.state.pan} name='pan' onChange={this.handleInput} className="form-control" required/>                                                      
                        </div>
                        </div>
                    </div>
                   
                               
                                                
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                </form>
            </div>
            </div>
        )
    }
}

export default withRouter(Addemployees);