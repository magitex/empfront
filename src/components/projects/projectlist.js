import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Project(props) {
    return (
            <tr>
                <td>{props.project.index}</td>
                <td>{props.project.name}</td>
                <td>{props.project.module}</td>
                <td>{props.project.estimatedtime}</td>
                <td>{props.project.status}</td>                
                <td>
                <Link to={'/editprojects/'+props.project._id} className='btn bi bi-pencil'></Link> 
                <i className='btn bi bi-trash'></i>
                </td>
            </tr>
    )
}

export default class Projectlist extends Component {
    constructor(props){
        super(props);

       // this.deleteEmployee = this.deleteEmployee.bind(this)

        this.state = {projects: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/projects/')
        .then(res =>{
            //console.log(res.data)
            this.setState({ projects: res.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteEmployee(id){
        axios.delete('http://localhost:4000/projects/'+id)
        .then(res => console.log(res.data));

        this.setState({
            projects: this.state.projects.filter(el => el._id !== id)
        })
    }

    projectList(){
        return this.state.projects.map(currentproject =>{
            return <Project project={currentproject} key={currentproject._id} />;

        })
    }

    render() {
        return (
            <div>
            <table className="container table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Module</th>
                        <th scope="col">Estimated Time</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>                                            
                     {this.projectList()}                                                                                  
                </tbody>
            </table>
        </div>

        )
    }
}
