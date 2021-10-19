import React, { Component } from 'react'
import './homepage.css'
import { useAuth } from "../../contexts/useAuth"
import { Pie } from 'react-chartjs-2';
export default function Homepage() {      
    const { currentUser } = useAuth()
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            width: 400,
            height:400,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
     
   // console.log('user',i)

        return (
            <div className='main'>
                 <h3>Welcome {currentUser.email}</h3> 
                <div><Pie data={data} /></div>         
            </div>
        )
    
}
