import React, { Component } from 'react'
import employeeList from './employeeList.json'

export default class Employeeslist extends Component {
    render() {       
        return (
            <div>
                <table className="container table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>                                            
                         <tr>
                            <th scope="row" >
                            {employeeList.map((employeeList,index)=>{
                                     return<h6 key={index}>{employeeList.id}</h6>
                                 })}    
                            </th>
                            <td>    
                                {employeeList.map((employeeList,index)=>{
                                     return<h6 key={index}>{employeeList.firstname}</h6>
                                 })}    
                             </td>
                            <td>
                            {employeeList.map((employeeList,index)=>{
                                     return<h6 key={index}>{employeeList.lastname}</h6>
                                 })}  
                            </td>
                            <td>
                            {employeeList.map((employeeList,index)=>{
                                     return<h6 key={index}>{employeeList.address}</h6>
                                 })}  
                            </td>
                            <td>
                            {employeeList.map((employeeList,index)=>{
                                     return<h6 key={index}>{employeeList.email}</h6>
                                 })} 
                            </td>
                            <td>
                            {employeeList.map((employeeList,index)=>{
                                     return<h6 key={index}>{employeeList.phone}</h6>
                                 })} 
                            </td>
                        </tr>                                                                                  
                    </tbody>
                </table>
            </div>
        )
    }
}
