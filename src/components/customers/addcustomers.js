import React, { Component } from 'react'


export default class Addcustomers extends Component {
    render() {
        return (
            <div className='container pt-1'>
                <form>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">First name</label>
                            <input type="text" id="form6Example1" className="form-control" />                            
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Last name</label> 
                            <input type="text" id="form6Example2" className="form-control" />                           
                        </div>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                         <label className="form-label" htmlFor="form6Example3">Address Line 1</label>
                        <input type="text" id="form6Example3" className="form-control" />                       
                    </div>
         
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example4">Address Line 2</label>
                        <input type="text" id="form6Example4" className="form-control" />                       
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example5">City</label>      
                            <input type="text" id="form6Example1" className="form-control" />                           
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example6">Country</label>
                            <input type="text" id="form6Example2" className="form-control" />                         
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example7">Zipcode</label>
                            <input type="text" id="form6Example2" className="form-control" />                           
                        </div>
                        </div>
                    </div>
            
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example8">Email</label>
                        <input type="email" id="form6Example5" className="form-control" />                       
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example9">Phone</label>
                        <input type="number" id="form6Example6" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example9">GST#</label>  
                        <input type="number" id="form6Example6" className="form-control" />                        
                    </div>
                                                
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                </form>
            </div>
        )
    }
}
