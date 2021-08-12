import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Employee(props) {
    return (
            <tr>
                <td>{props.employee.index}</td>
                <td>{props.employee.firstname}</td>
                <td>{props.employee.lastname}</td>
                <td>{props.employee.address1}</td>
                <td>{props.employee.email}</td>
                <td>{props.employee.phone}</td>
                <td>{props.employee.gst}</td>
                <td>
                <Link to={'/editemployees/'+props.employee._id} className='btn bi bi-pencil'></Link> 
                <i className='btn bi bi-trash'></i>
                </td>
            </tr>
    )
}



export default class Employeeslist extends Component {
    constructor(props){
        super(props);

       // this.deleteEmployee = this.deleteEmployee.bind(this)

        this.state = {employees: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/employees/')
        .then(res =>{
            //console.log(res.data)
            this.setState({ employees: res.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteEmployee(id){
        axios.delete('http://localhost:4000/employees/'+id)
        .then(res => console.log(res.data));

        this.setState({
            employees: this.state.employees.filter(el => el._id !== id)
        })
    }

    employeeList(){
        return this.state.employees.map(currentemployee =>{
            return <Employee employee={currentemployee} key={currentemployee._id} />;

        })
    }

    render() {       
        return (
            <div>
                <table className="container table">
                    <thead className='thead-light'>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Adress</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>GST</th>
                        </tr>
                    </thead>
                    <tbody>                                            
                            {this.employeeList()}                                                                                                                                              
                    </tbody>
                </table>
            </div>
        )
    }
}
