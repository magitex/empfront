import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Customer(props) {
    return (
            <tr>
                <td>{props.customer.index}</td>
                <td>{props.customer.firstname}</td>
                <td>{props.customer.lastname}</td>
                <td>{props.customer.address1}</td>
                <td>{props.customer.email}</td>
                <td>{props.customer.phone}</td>
                <td>{props.customer.gst}</td>
                <td>
                <Link to={'/editcustomer/'+props.customer._id} className='btn bi bi-pencil'></Link> 
                <i className='btn bi bi-trash'></i>
                </td>
            </tr>
    )
}

export default class Customerslist extends Component {
    constructor(props){
        super(props);

       // this.deletecustomer = this.deletecustomer.bind(this)

        this.state = {customers: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/customers/')
        .then(res =>{
            //console.log(res.data)
            this.setState({ customers: res.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deletecustomer(id){
        axios.delete('http://localhost:4000/customers/'+id)
        .then(res => console.log(res.data));

        this.setState({
            customers: this.state.customers.filter(el => el._id !== id)
        })
    }

    customerList(){
        return this.state.customers.map(currentcustomer =>{
            return <Customer customer={currentcustomer} key={currentcustomer._id} />;

        })
    }

    render() {       
        return (
            <div>
                <table className="container table">
                    <thead>
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
                         {this.customerList()}
                    </tbody>
                </table>             
            </div>
        )
    }
}
