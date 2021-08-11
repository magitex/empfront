import React, { Component } from 'react'
import projectList from "./projectList.json"

export default class Projectlist extends Component {
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
                     <tr>
                        <th scope="row">
                        {projectList.map((projectList,index)=>{
                                 return<h6 key={index}>{projectList.id}</h6>
                             })}    
                        </th>
                        <td>    
                            {projectList.map((projectList,index)=>{
                                 return<h6 key={index}>{projectList.name}</h6>
                             })}    
                         </td>
                        <td>
                        {projectList.map((projectList,index)=>{
                                 return<h6 key={index}>{projectList.module}</h6>
                             })}  
                        </td>
                        <td>
                        {projectList.map((projectList,index)=>{
                                 return<h6 key={index}>{projectList.estimatedtime}</h6>
                             })}  
                        </td>
                        <td>
                        {projectList.map((projectList,index)=>{
                                 return<h6 key={index}>{projectList.status}</h6>
                             })} 
                        </td>                     
                    </tr>                                                                                  
                </tbody>
            </table>
        </div>

        )
    }
}
