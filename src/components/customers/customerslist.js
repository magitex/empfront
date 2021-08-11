import React, { Component } from 'react'
import customerList from './customerList.json'

export default class Customerslist extends Component {
    render() {       
        return (
            <div>
                <table className="container table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>                        
                        </tr>
                    </thead>
                    <tbody>                                            
                         <tr>
                            <th scope="row" >
                            {customerList.map((customerList,index)=>{
                                     return<h6 key={index}>{customerList.id}</h6>
                                 })}    
                            </th>
                            <td>    
                                {customerList.map((customerList,index)=>{
                                     return<h6 key={index}>{customerList.firstname}</h6>
                                 })}    
                             </td>
                            <td>
                            {customerList.map((customerList,index)=>{
                                     return<h6 key={index}>{customerList.lastname}</h6>
                                 })}  
                            </td>
                            <td>
                            {customerList.map((customerList,index)=>{
                                     return<h6 key={index}>{customerList.address}</h6>
                                 })}  
                            </td>
                            <td>
                            {customerList.map((customerList,index)=>{
                                     return<h6 key={index}>{customerList.email}</h6>
                                 })} 
                            </td>
                            <td>
                            {customerList.map((customerList,index)=>{
                                     return<h6 key={index}>{customerList.phone}</h6>
                                 })} 
                            </td>                            
                        </tr>                                                                                              
                    </tbody>
                </table>             
            </div>
        )
    }
}
