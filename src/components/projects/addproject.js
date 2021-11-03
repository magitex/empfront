import React, { Component } from 'react';
import axios from'axios';
import { withRouter } from 'react-router-dom';

class Addproject extends Component {
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
        console.log(newProjects)

        axios.post(process.env.REACT_APP_BASE_URL+'projects/add',newProjects)
        .then(response => console.log(response.data))
        window.location=('/projectlist')

        this.setState({
            name:'',
            module:'',  
            estimatedtime:'',  
            status:'',  
        }) 
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

export default withRouter(Addproject)
