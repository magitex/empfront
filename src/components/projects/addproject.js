import React, { Component } from 'react'

export default class Addproject extends Component {
    constructor(props){
        super(props);
        this.state={           
                name:'',
                module:'',  
                estimatedtime:'',  
                status:'',                         
        }
        this.handleInput=this.handleInput.bind(this);
        this.addProject=this.addProject.bind(this);
    }

    handleInput(e){
        this.setState({          
            [e.target.name]:e.target.value        
        })
    }

    addProject(e){
        e.preventDefault();
        const newProjects = this.state
        console.log(newProjects);
        document.getElementById('name').value=null;
        document.getElementById('module').value=null;
        document.getElementById('time').value=null;
        document.getElementById('status').value=null;
    }
    render() {
        return (
            <div  className='container pt-1'>
                <h3>Add New Project</h3>
                <form onSubmit={this.addProject}>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Name</label>
                            <input 
                            type="text" id='name' value={this.state.name} name='name' onChange={this.handleInput} className="form-control" required/>                            
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Module</label> 
                            <input id='module' type="text" value={this.state.module} name='module' onChange={this.handleInput} className="form-control" required />                           
                        </div>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                         <label className="form-label" htmlFor="form6Example3">Estimated Time</label>
                        <input id='time' type="text" value={this.state.estimatedtime} name='estimatedtime' onChange={this.handleInput} className="form-control" required/>                       
                    </div>
         
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example4">Status</label>
                        <input id='status' type="text" value={this.state.status} name='status' onChange={this.handleInput} className="form-control" required/>                       
                    </div>     

                    <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                </form>                
            </div>
        )
    }
}
