import React, { Component } from 'react'


export default class Addemployees extends Component {
    render() {
        return (
            <div className='container pt-1'>
                <form>
                <h3>New Employee</h3>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" />
                            <label className="form-label" htmlFor="form6Example1">First name</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" />
                            <label className="form-label" htmlFor="form6Example2">Last name</label>
                        </div>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example3" className="form-control" />
                        <label className="form-label" htmlFor="form6Example3">Address Line 1</label>
                    </div>
         
                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example4" className="form-control" />
                        <label className="form-label" htmlFor="form6Example4">Address Line 2</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" />
                            <label className="form-label" htmlFor="form6Example5">City</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" />
                            <label className="form-label" htmlFor="form6Example6">Country</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" />
                            <label className="form-label" htmlFor="form6Example7">Zipcode</label>
                        </div>
                        </div>
                    </div>
            
                    <div className="form-outline mb-4">
                        <input type="email" id="form6Example5" className="form-control" />
                        <label className="form-label" htmlFor="form6Example8">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="number" id="form6Example6" className="form-control" />
                        <label className="form-label" htmlFor="form6Example9">Phone</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="number" id="form6Example6" className="form-control" />
                        <label className="form-label" htmlFor="form6Example9">GST#</label>
                    </div>
                                                
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                </form>
            </div>
        )
    }
}
